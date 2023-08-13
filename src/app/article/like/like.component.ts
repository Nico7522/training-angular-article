import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
@Input() totalNumberLike: number = 0;
@Input() titleArticle: string = "";
@Output() info = new EventEmitter<string>();
isClicked: string = ''

onLike(): void {
  this.totalNumberLike +=1;
  this.info.emit(this.titleArticle)
  this.isClicked = 'liked'
}

onDislike(): void {
  this.totalNumberLike -=1;
  this.info.emit(this.titleArticle)
  this.isClicked = 'disliked'

}
}
