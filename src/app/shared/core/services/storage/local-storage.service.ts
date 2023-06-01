import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getObject(key: string): object | null {
    try {
      return JSON.parse(localStorage.getItem(key) || '');
    } catch (e) {
      return null;
    }
  }

  setObject(key: string, value: any, exp: Date): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
