import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from 'src/app/shared/core/interfaces/IApiResponse';
import { HttpService } from 'src/app/shared/core/services/http/http.service';
import { LocalStorageService } from 'src/app/shared/core/services/storage/local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _storage: LocalStorageService,
    private _http: HttpService
  ) {}
  /**
   *
   * @param name : access or refresh
   * @returns
   */
  public getAuthorizationAccessToken(): string {
    return this._storage.get('accessToken') || '';
  }
  public getAuthorizationRefreshToken(): string {
    return this._storage.get('refreshToken') || '';
  }
  public getRefreshTokenApi(refreshToken: string): Observable<IApiResponse> {
    return this._http.post(environment.refreshToken, { refreshToken });
  }
  public login(username: string, password: string): Observable<IApiResponse> {
    return this._http.post(environment.login, { username, password });
  }
}
