import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/shared/models/article';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private route: ActivatedRoute, private listArticle: DataService){}
  products: Article[] = this.listArticle.articleList
  ngOnInit(): void {



  }
}
