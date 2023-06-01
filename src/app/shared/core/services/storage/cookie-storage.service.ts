import { Injectable } from '@angular/core';
import { CookieOptions, CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CookieStorageService {
  options: CookieOptions = {
    path: '/',
    sameSite: 'None',
    secure: true,
  };
  constructor(private _cookie: CookieService) {}

  /**
   * Nb: exp date: date format toUTCString()
   */

  get(key: string): string {
    return this._cookie.get(key);
  }

  set(key: string, value: string, exp?: Date): void {
    if (exp) this.options.expires = exp;
    this._cookie.set(key, value, this.options);
  }

  getObject(key: string): object | null {
    try {
      return JSON.parse(this._cookie.get(key));
    } catch (e) {
      return null;
    }
  }

  setObject(key: string, value: any, exp: Date): void {
    if (exp) this.options.expires = exp;
    this._cookie.set(key, JSON.stringify(value), this.options);
  }
}
