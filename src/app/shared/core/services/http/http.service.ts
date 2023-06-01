import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(
    url: string,
    params?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [param: string]: string | string[];
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<any> {
    return this.http.get(`${environment.api.baseUrl}${url}`, params);
  }

  post(
    url: string,
    body: any | null,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [param: string]: string | string[];
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<any> {
    return this.http.post(`${environment.api.baseUrl}${url}`, body, options);
  }

  patch(
    url: string,
    body: any | null,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [param: string]: string | string[];
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<any> {
    return this.http.patch(`${environment.api.baseUrl}${url}`, body, options);
  }

  put(
    url: string,
    body: any | null,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [param: string]: string | string[];
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<any> {
    return this.http.put(`${environment.api.baseUrl}${url}`, body, options);
  }

  delete(
    url: string,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [param: string]: string | string[];
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<any> {
    return this.http.delete(`${environment.api.baseUrl}${url}`, options);
  }
}
