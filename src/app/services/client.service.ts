import { Injectable } from '@angular/core';
import { User, UserRequest } from '../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<UserRequest> {
    let user = this._httpClient.get<UserRequest>('http://localhost:8080/api/user')
    return user
  }
}
