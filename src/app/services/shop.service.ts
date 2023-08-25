import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private _httpClient: HttpClient) {}
  httpOptions = {
    withCredentials: true,
  };
  getUserCommand(): Observable<any> {
    return this._httpClient.get(
      'http://localhost:8080/api/command/user',
      this.httpOptions
    );
  }
}
