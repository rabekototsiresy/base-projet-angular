import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, finalize, Observable, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from '../services/http/http.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { NotifierService } from '../services/notifier/notifier.service';
import { LocalStorageService } from '../services/storage/local-storage.service';
import { SweetAlertService } from '../services/sweetAlert/sweet-alert.service';
import { ESweetAlertIcon } from '../enums/ESweetAlert';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  private isRefreshing = false; // Flag to track if token refresh is already in progress
  private readonly MAX_RETRY_ATTEMPTS = 3;

  constructor(
    private _authService: AuthService,
    private _http: HttpService,
    private _router: Router,
    private _notifier: NotifierService,
    private _storage: LocalStorageService,
    private _sweet: SweetAlertService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = this.addHeader(request);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403 || error.status === 401) {
          const refreshToken = this._authService.getAuthorizationRefreshToken();
          if (refreshToken && !this.isRefreshing) {
            this.isRefreshing = true; // Set the flag to indicate token refresh is in progress
            return this.refreshTokenAndRetry(request, next, refreshToken).pipe(
              catchError((refreshError) => {
                this._router.navigateByUrl('/app/auth/login');
                return throwError(refreshError);
              })
            );
          }
        } else {
          this._sweet.swal(
            'Une erreur est survenue',
            'Veuillez contacter le responsable',
            ESweetAlertIcon.ERROR
          );
        }

        return throwError(error);
      }),
      finalize(() => {
        this.isRefreshing = false; // Reset the flag after token refresh is completed or failed
      }) as any
    );
  }

  private refreshTokenAndRetry(
    request: HttpRequest<unknown>,
    next: HttpHandler,
    refreshToken: string
  ): Observable<HttpEvent<unknown>> {
    return this._authService.getRefreshTokenApi(refreshToken).pipe(
      switchMap((response) => {
        this._storage.set('accessToken', response.data.accessToken);
        const retryRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${response.data.accessToken}`,
          },
        });
        return next.handle(retryRequest);
      })
    );
  }

  addHeader(request: HttpRequest<unknown>) {
    const token = this._authService.getAuthorizationAccessToken();
    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
    }
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });

    return request;
  }
}
