import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, flatMap, mergeMap, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('api-token');

    if (token) {
      request = request.clone({
          setHeaders: {
              'api-token': token
          }
      });
  }
    return next.handle(request)
      .pipe(
				catchError(err => {
					return this.authService.refreshToken().pipe(
						mergeMap(data => {
							localStorage.setItem("api-token", data.access_token);
							request = request.clone({
								setHeaders: {
									'Authorization': `Bearer ${data.access_token}`
								}
							});
							return next.handle(request);
						})
					);
      }));
  }
}
