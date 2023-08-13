import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  articleList: Article[] = [
    {
      id: 1,
      titleArticle: 'Vélo',
      priceArticle: 200,
      description: 'Vélo nouvelle collection',
      textAltImg: 'alternative title',
      urlImg: 'https://via.placeholder.com/400x250',
      available: true,
      numberOfLike: 0

    },
    {
      id: 2,
      titleArticle: 'Bateau',
      priceArticle: 1777,
      description: 'Bateau nouvelle collection',
      textAltImg: 'alternative title',
      urlImg: 'https://via.placeholder.com/400x250',
      available: true,
      numberOfLike: 0
    },
    {
      id: 3,
      titleArticle: 'Voile',
      priceArticle: 999,
      description: 'Voile nouvelle collection',
      textAltImg: 'alternative title',
      urlImg: 'https://via.placeholder.com/400x250',
      available: false,
      numberOfLike: 0

    },
  ];

  getById(id: number): Article | undefined {
    return this.articleList.find((a: Article) => a.id === id);
  }

  
  constructor() {}
}
