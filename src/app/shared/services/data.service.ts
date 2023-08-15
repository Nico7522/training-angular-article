import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { BehaviorSubject, Observable } from 'rxjs';

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

      categorie: 'vienoisserie',
    },
  ];
  private _product!: Article | undefined;
  private _$product: BehaviorSubject<Article | undefined> = new BehaviorSubject<Article | undefined>(this._product);
  $product: Observable<Article | undefined> = this._$product.asObservable();
  getById(id: number): Article | undefined {
    const temp = this.articleList.find(a => { return a.id === id})
    this._$product.next(temp)
    return this.articleList.find((a: Article) => a.id === id);
  }

  onLike(id: number, isLiked: boolean): void {
    this.articleList.filter((a: Article) => {
      if (a.id === id) {
        if (!isLiked) {
          a.numberOfLike += 1;
        } else {
          a.numberOfLike -= 1;
        }
      }
    });
  }

  onDislike(id: number, isDisliked: boolean): void {
    this.articleList.filter((a: Article) => {
      if (a.id === id) {
        if (isDisliked) {
          a.numberOfDislike -= 1;
        } else {
          a.numberOfDislike += 1;
        }
      }
    });
  }

  constructor() {}
}
