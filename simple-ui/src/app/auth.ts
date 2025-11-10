import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginRequest {
  login: string;
  password: string;
}

export interface LoginResponse {
  token?: string;
  message?: string;
  success: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = '/user/login'; // The specified endpoint
  
  login(login: string, password: string): Observable<LoginResponse> {
    const loginData: LoginRequest = { login, password };
    return this.http.post<LoginResponse>(this.apiUrl, loginData);
  }
}
