import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: any): void {
    console.log('token', token);
    
    sessionStorage.setItem("token", JSON.stringify(token))
  }

  getToken(): string | null {
    return sessionStorage.getItem('token')
  }

  // Attention en front on utilise pas
  getDecodeToken(): string | null {
    if (this.getToken()) {
      const token = this.getToken()
      return JSON.parse(JSON.stringify(jwtDecode(token as string)))
    } else {
      return null
    }
  }
}
