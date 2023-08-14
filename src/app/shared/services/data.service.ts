import { Injectable } from '@angular/core';
import { Article } from '../models/article';

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
      numberOfLike: 0

    },
    {
      id: 2,
      titleArticle: 'Baguette',
      priceArticle: 2.59,
      description: 'Baguette du jour',
      textAltImg: 'alternative title',
      urlImg: '../../../assets/baguette.jpg',
      available: true,
      numberOfLike: 0
    },
    {
      id: 3,
      titleArticle: 'Croissant',
      priceArticle: 1.77,
      description: 'Croissant tout chaud',
      textAltImg: 'alternative title',
      urlImg: '../../../assets/croissant.jpg',
      available: false,
      numberOfLike: 0

    },
  ];

  getById(id: number): Article | undefined {
    return this.articleList.find((a: Article) => a.id === id);
  }

  onLike(id: number): void {
    this.articleList.filter((a: Article) => {
      if (a.id === id) {
        a.numberOfLike =+1
      }
    })

  }
  
  onDislike(id: number): void {
    this.articleList.filter((a: Article) => {
      if (a.id === id) {
        a.numberOfLike -=1
      }
    })
  
  }


  constructor() {}
}
