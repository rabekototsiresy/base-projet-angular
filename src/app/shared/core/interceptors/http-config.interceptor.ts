import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(
    private _authService: AuthService
  ) //
  {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('tetestests')
    const token = this._authService.getToken('access');
    console.log('tokenn',token)
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
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          /**
           * redirect logout
           */
        }
        return throwError(error);
      })
    );
  }
}
