import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (errorResponse.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${errorResponse.error?.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${errorResponse.status} Message: ${errorResponse.message}`;
    }
    return throwError(() => errorMessage);
  }

  get<T>(url: string, params: HttpParams): Observable<Object> {
    return this.http.get(url, { params }).pipe(catchError(this.handleError));
  }
}
