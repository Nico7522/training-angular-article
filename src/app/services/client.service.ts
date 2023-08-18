import { Injectable } from '@angular/core';
import { User, UserRequest } from '../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<UserRequest> {
    let user = this._httpClient.get<UserRequest>(`${environment.apiUrl}/user`)
    return user
  }
}
