import { Component } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Article } from '../shared/models/article';

@Component({
  
  selector: 'app-articles-section, TestDirective',
  templateUrl: './articles-section.html',
  styleUrls: ['./articles-section.css'],
  
})
export class ArticlesSectionComponent {
pain: any;
  constructor(private articleList: DataService) {
    this.articleList.$filteredProduct.subscribe((val: Article[] ) => {
      this.articles = val
    })
  }
  articles: Article[] = []
  title = 'labonneaffaire';
  message: string = ""
  getMessage(message: string) {
    this.message = message
  }
  ngOnInit(): void {
    this.articles = this.articleList.articleList
}
}
