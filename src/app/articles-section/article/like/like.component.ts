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
@Input() titleArticle: string = "";
@Input() id!: number
isClicked: string = ''

like(id: number) {
  this.articleList.onLike(id)
  this.isClicked = "liked"
}

dislike(id: number) {
  this.articleList.onDislike(id)
  this.isClicked = "disliked"
}

}
