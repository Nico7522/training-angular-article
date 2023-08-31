import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Product } from '../shared/models/product';
import { ErrorResponse, LikeOrDislikeResponse, NotModifiedResponse } from '../shared/interfaces/response.interface';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  private _search: string = '';
  private _$search: BehaviorSubject<string> = new BehaviorSubject<string>(
    this._search
  );
  $search: Observable<string> = this._$search.asObservable();
  private filteredProduct: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  $filteredProduct: Observable<Product[]> = this.filteredProduct.asObservable();

  private _product!: Product | undefined;
  private _$product: BehaviorSubject<Product | undefined> = new BehaviorSubject<
    Product | undefined
  >(this._product);
  $product: Observable<Product | undefined> = this._$product.asObservable();

  constructor(private _httpClient: HttpClient, private _authService: AuthService, private _cookieSerice: CookieService) {}

  getProducts(): Observable<Product[]> {
    return this._httpClient
      .get<Product[]>(`${environment.apiUrl}/product`)
      .pipe(
        map((product) => {
          this.products = product;
          return product;
        })
      );
  }

  getProductByCategorie(categorie: string): Observable<Product[]> {
    return this._httpClient.get<Product[]>(
      `${environment.apiUrl}/product/categorie/${categorie}`
    );
  }

  getById(id: number): Product | undefined {
    const actualProduct = this.products.find((a) => {
      return a.id === id;
    });
    this._$product.next(actualProduct);

    return this.products.find((a: Product) => a.id === id);
  }

  onSearch(value: string) {
    this._$search.next(value);
    const filter = this.products.filter((product) => {
      return product.title
        .toLowerCase()
        .replaceAll('é', 'e')
        .includes(value.toLowerCase().replaceAll('é', 'e'));
    });
    this.filteredProduct.next(filter);
  }

  like(id: number): Observable<LikeOrDislikeResponse | NotModifiedResponse | ErrorResponse> {
    console.log(this._cookieSerice.get('token'));
    
    return this._httpClient
      .put<LikeOrDislikeResponse | NotModifiedResponse | ErrorResponse>(
        `${environment.apiUrl}/product/like`,
        { id },
        { withCredentials: true }
      )
      .pipe((res) => {
        return res;
      });
  }

  dislike(id: number): Observable<LikeOrDislikeResponse | NotModifiedResponse | ErrorResponse> {
    console.log(id);
    
    return this._httpClient
      .put<LikeOrDislikeResponse | NotModifiedResponse | ErrorResponse>(
        `${environment.apiUrl}/product/dislike`,
        { id },
        { withCredentials: true }
      )
      .pipe(map((res) => {
     
        return res
      }));
  }

  isLiked(id: number): Observable<boolean | null> {
    return this._httpClient
      .get<boolean | null>(`${environment.apiUrl}/product/isliked/${id}`, { withCredentials: true})
      .pipe((res) => {
      
        return res;
      });
  }

  isDisliked(id: number): Observable<boolean | null> {
    return this._httpClient
      .get<boolean | null>(`${environment.apiUrl}/product/isdisliked/${id}`, { withCredentials: true})
      .pipe((res) => {
        
        return res;
      });
  }
}
