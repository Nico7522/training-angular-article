import { Component, Input} from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  constructor(private articleList: DataService){}
@Input() liked!: number;
@Input() disliked!: number;
@Input() titleArticle: string = "";
@Input() id!: number

isLiked: boolean = false
isDisliked: boolean = false

like(id: number) {
 
  
  this.articleList.onLike(id, this.isLiked)
 
  this.isLiked = !this.isLiked
}

dislike(id: number) {
  this.articleList.onDislike(id, this.isDisliked)

  this.isDisliked = !this.isDisliked
}

}
