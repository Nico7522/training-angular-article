import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/shared/models/article';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  article!: Article; 
  constructor(
    private articleList: DataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    let articleFound = this.articleList.getById(Number(id))
    if (articleFound) {
      this.article = articleFound
    }
  }
}
