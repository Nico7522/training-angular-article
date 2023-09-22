import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Command } from '../shared/models/command';
import { environment } from 'src/environment/environment';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  panier: Product[]  = [];
  private _$panier: BehaviorSubject<Product[] | undefined> = new BehaviorSubject<
  Product[] | undefined
>(this.panier);
  $panier: Observable<Product[] | undefined> = this._$panier.asObservable();
  constructor(private _httpClient: HttpClient) {}

  getUserCommand(): Observable<any> {
    return this._httpClient.get<any>(`${environment.apiUrl}/command/user`, {
      withCredentials: true,
    });
  }

  postCommand(command: Command): Observable<any> {
    return this._httpClient.post<any>(`${environment.apiUrl}/command`, command, { withCredentials: true});
  }

  addProduct(product: Product | undefined) {
    console.log(product);
    
    if (product) {
      this.panier.push(product)
      this._$panier.next(this.panier)
    }
  }
}
