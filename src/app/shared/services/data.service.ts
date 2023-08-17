import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  articleList: Article[] = [
    {
      id: 1,
      titleArticle: 'Pain',
      priceArticle: 4.99,
      description: 'Pain frais du jour',
      textAltImg: 'alternative title',
      urlImg: '../../../assets/pain.jpeg',
      available: true,
      numberOfLike: 0,
      numberOfDislike: 0,
      isLiked: false,
      isDisliked: false,

      categorie: 'pain',
    },
    {
      id: 2,
      titleArticle: 'Pain',
      priceArticle: 4.99,
      description: 'Pain frais du jour',
      textAltImg: 'alternative title',
      urlImg: '../../../assets/pain.jpeg',
      available: true,
      numberOfLike: 0,
      numberOfDislike: 0,
      isLiked: false,
      isDisliked: false,

      categorie: 'pain',
    },
    {
      id: 3,
      titleArticle: 'Pain',
      priceArticle: 4.99,
      description: 'Pain frais du jour',
      textAltImg: 'alternative title',
      urlImg: '../../../assets/pain.jpeg',
      available: true,
      numberOfLike: 0,
      numberOfDislike: 0,
      isLiked: false,
      isDisliked: false,

      categorie: 'pain',
    },
    {
      id: 4,
      titleArticle: 'Pain',
      priceArticle: 4.99,
      description: 'Pain frais du jour',
      textAltImg: 'alternative title',
      urlImg: '../../../assets/pain.jpeg',
      available: true,
      numberOfLike: 0,
      numberOfDislike: 0,
      isLiked: false,
      isDisliked: false,

      categorie: 'pain',
    },
    {
      id: 5,
      titleArticle: 'Pain',
      priceArticle: 4.99,
      description: 'Pain frais du jour',
      textAltImg: 'alternative title',
      urlImg: '../../../assets/pain.jpeg',
      available: true,
      numberOfLike: 0,
      numberOfDislike: 0,
      isLiked: false,
      isDisliked: false,

      categorie: 'pain',
    },
    {
      id: 6,
      titleArticle: 'Pain',
      priceArticle: 4.99,
      description: 'Pain frais du jour',
      textAltImg: 'alternative title',
      urlImg: '../../../assets/pain.jpeg',
      available: true,
      numberOfLike: 0,
      numberOfDislike: 0,
      isLiked: false,
      isDisliked: false,

      categorie: 'pain',
    },
    {
      id: 7,
      titleArticle: 'Baguette',
      priceArticle: 2.59,
      description: 'Baguette du jour',
      textAltImg: 'alternative title',
      urlImg: '../../../assets/baguette.jpg',
      available: true,
      numberOfLike: 0,
      numberOfDislike: 0,
      isLiked: false,
      isDisliked: false,
      categorie: 'baguette',
    },
    {
      id: 8,
      titleArticle: 'Croissant',
      priceArticle: 1.77,
      description: 'Croissant tout chaud',
      textAltImg: 'alternative title',
      urlImg: '../../../assets/croissant.jpg',
      available: false,
      numberOfLike: 0,
      numberOfDislike: 0,
      isLiked: false,
      isDisliked: false,
      categorie: 'vienoisserie',
    },
  ];
  // Observable pour les détails
  private _product!: Article | undefined;
  private _$product: BehaviorSubject<Article | undefined> = new BehaviorSubject<Article | undefined>(this._product);
  $product: Observable<Article | undefined> = this._$product.asObservable();

  //Observable pour la recherche
  private _search: String = "";
  private _$search: BehaviorSubject<String> = new BehaviorSubject<String>(this._search);
  $search: Observable<String> = this._$search.asObservable()
  private filteredProduct: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([])
  $filteredProduct: Observable<Article[]> = this.filteredProduct.asObservable();



  
  getById(id: number): Article | undefined {
    const actualProduct = this.articleList.find(a => { return a.id === id})
    this._$product.next(actualProduct)
    
    return this.articleList.find((a: Article) => a.id === id);
  }

  onSearch(value: string) {
    
    const filter = this.articleList.filter((article) => {
      return article.titleArticle.includes(value)
    })
    this.filteredProduct.next(filter)
  
   
    
  }

  onLike(id: number): void {
    this.articleList.filter((a: Article) => {
      if (a.id === id) {
        if (!a.isLiked) {
          a.numberOfLike +=1;
          a.isLiked = true;
        } else {
          a.numberOfLike -=1;
          a.isLiked = false;
          
        }
 
      }
    });
  }

  onDislike(id: number): void {
    this.articleList.filter((a: Article) => {
      if (a.id === id) {
        if (!a.isDisliked) {
          a.numberOfDislike +=1;
          a.isDisliked = true;
        } else {
          a.numberOfDislike -=1;
          a.isDisliked = false;
          
        }
      }
    });
  }

  constructor() {}
}
