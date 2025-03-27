import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://tu-backend.com/api/auth'; // Reemplaza con tu URL
  private mockUser = { email: 'admin@test.com', password: '123456' }; // Datos de prueba

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  // login(email: string, password: string): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/login`, { email, password });
  // }

  // saveToken(token: string) {
  //   localStorage.setItem('authToken', token);
  // }

  // getToken(): string | null {
  //   return localStorage.getItem('authToken');
  // }

  // logout() {
  //   localStorage.removeItem('authToken');
  // }


  // Logica para logueo con datos de prueba
  login(email: string, password: string): boolean {
    if (email === this.mockUser.email && password === this.mockUser.password) {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('user', JSON.stringify({ email }));
      }
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('user') !== null;
    }
    return false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('user');
    }
    this.router.navigate(['/login']);
  }
}
