import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Command, CommandUser } from '../shared/models/command';
import { environment } from 'src/environment/environment';
import { Product, ProductWithQuantity } from '../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private _panier: ProductWithQuantity[] = [];
  private _$panier: BehaviorSubject<ProductWithQuantity[] | undefined> =
    new BehaviorSubject<ProductWithQuantity[] | undefined>(this._panier);
  $panier: Observable<ProductWithQuantity[] | undefined> =
    this._$panier.asObservable();

  constructor(private _httpClient: HttpClient) {}

  getUserCommand(): Observable<any> {
    return this._httpClient.get<any>(`${environment.apiUrl}/command/user`, {
      withCredentials: true,
    });
  }

  postCommand(products: any[]): Observable<any> {
    return this._httpClient.post<any>(
      `${environment.apiUrl}/command`,
      { products },
      { withCredentials: true }
    );
  }

  addProduct(product: ProductWithQuantity | undefined) {
    if (product) {
      this._panier.push(product);
      this._$panier.next(this._panier);
    }
  }
}
