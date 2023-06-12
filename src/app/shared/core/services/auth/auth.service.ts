import { Injectable } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _storage: LocalStorageService) {}
  /**
   *
   * @param name : access or refresh
   * @returns
   */
  public getToken(name: string): string {
    return (
      (name === 'access'
        ? this._storage.get('accessToken')
        : name == 'refresh'
        ? this._storage.get('refreshToken')
        : '') || ''
    );
  }
}
