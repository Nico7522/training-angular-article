import { Component } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Article } from '../shared/models/article';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  constructor(private articleList: DataService) {}
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
