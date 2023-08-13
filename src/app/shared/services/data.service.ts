import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  articleList: Article[] = [
    {
      titleArticle: "Vélo",
      priceArticle: 200,
      description: "Vélo nouvelle collection",
      textAltImg: "alternative title",
      urlImg:  "https://via.placeholder.com/400x250",
      available: true
    },
    {
      titleArticle: "Bateau",
      priceArticle: 1777,
      description: "Bateau nouvelle collection",
      textAltImg: "alternative title",
      urlImg:  "https://via.placeholder.com/400x250",
      available: true
    },
    {
      titleArticle: "Voile",
      priceArticle: 999,
      description: "Voile nouvelle collection",
      textAltImg: "alternative title",
      urlImg:  "https://via.placeholder.com/400x250",
      available: false
    },
  ]
  constructor() { }
}
