import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  constructor(private articleList: DataService) {

    
  }
  @Input() liked!: number;
  @Input() disliked!: number;
  @Input() isLiked!: boolean
  @Input() isDisliked!: boolean
  @Input() title: string = '';
  @Input() id!: number;


  ngOnInit(): void {
 
  }

  like(id: number) {
    this.articleList.onLike(id);
  }

  dislike(id: number) {
    this.articleList.onDislike(id);
  }
}
