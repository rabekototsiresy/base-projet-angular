import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }
  getClientMessage(error: Error): string {
    if (!navigator.onLine) {
        return 'No Internet Connection';
    }
    return error.message ? error.message : error.toString();
  }

  getClientStack(error: Error): string {
    return error.stack  as any
  }

  getServerMessage(error: HttpErrorResponse): string {
    return error.message;
  }

    getServerStack(error: HttpErrorResponse): string {
      return 'stack';
    }

}
