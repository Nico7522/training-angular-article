import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { LikeOrDislike } from 'src/app/shared/interfaces/like-dislike.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  
@Input() title: string = "";
@Input() price: number = 12;
// @Input() availabe: boolean = true
@Input() description: string = ""
@Input() id: number = 0
@Input() like!: number;
@Input() disliked: number = 0
@Input() dislike!: number
@Input() img!: string;

@Input() errorMessage!: string
@Output() likeOrDislike= new EventEmitter<LikeOrDislike>()
totalNumberLike: number = 0;
comment: string = '';
message: string = '';
// sendId(id: number) {
//   this.likeProduct.emit(this.id)
// }

getId(action: LikeOrDislike){

  
  this.likeOrDislike.emit(action)
}




textAltImg: string = "alternative title";
urlImg: string = "https://via.placeholder.com/400x250";



}
