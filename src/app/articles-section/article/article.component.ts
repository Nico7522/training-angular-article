import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  
@Input() titleArticle: string = "";
@Input() priceArticle: number = 12;
@Input() availabe: boolean = true
@Input() description: string = ""
@Input() id: number = 0
@Input() liked: number = 0
@Input() img!: string;
@Input() alt!: string;
@Output() isLikedMessage = new EventEmitter<string>()
totalNumberLike: number = 0;
comment: string = '';
message: string = '';
getIsLiked(val: string) {
  this.message = "Vous avez aimé l'article " + val
  this.isLikedMessage.emit(this.message)
  return
}

textAltImg: string = "alternative title";
urlImg: string = "https://via.placeholder.com/400x250";



}
