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


onLike(): void {
  this.totalNumberLike +=1;
  this.info.emit(this.titleArticle)
}
}
