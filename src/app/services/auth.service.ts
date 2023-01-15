import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/auth.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static AUTH_TOKEN_URL = 'https://integra1.solutions.webfg.ch/restweb/oauth/token?grant_type=password&username=test001&scope=uaa.user&password=ryby3NTyKduAMcvZ';

  constructor(readonly http: HttpClient) { }

  refreshToken(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(AuthService.AUTH_TOKEN_URL, { }, {
      headers: {
       'Authorization': 'Basic d2ViZmctdGVzdDpXVzU4WUpqODlsdFI0M0Ny'
      }
    });
  }

}
