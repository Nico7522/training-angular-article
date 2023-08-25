import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Command } from '../shared/models/command';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private _httpClient: HttpClient) {}

  getUserCommand(): Observable<any> {
    return this._httpClient.get<any>(`${environment.apiUrl}`, {
      withCredentials: true,
    });
  }

  postCommand(command: Command): Observable<any> {
    return this._httpClient.post<any>(`${environment.apiUrl}/command`, command, { withCredentials: true});
  }
}
