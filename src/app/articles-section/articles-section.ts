import { Component } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Article } from '../shared/models/article';
import { CommonModule } from '@angular/common';
import { NextObserver, Observer } from 'rxjs';

@Component({
  selector: 'app-articles-section',
  templateUrl: './articles-section.html',
  styleUrls: ['./articles-section.css']
})
export class ArticlesSectionComponent {
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
