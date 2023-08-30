import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { LikeOrDislike } from 'src/app/shared/interfaces/like-dislike.interface';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  constructor(private _productService: ProductService) {

    
  }
  isLiked: boolean = false
  isDisliked: boolean = false
  @Input() like!: number;
  @Input() dislike!: number
  @Input() title: string = '';
  @Input() id!: number;


  ngOnInit(): void {
    this._productService.isLiked(this.id).subscribe({
      next: (res) => {
        if (res === true) {
          this.isLiked = true
        }
        
      }
    })

    this._productService.isDisliked(this.id).subscribe({
      next: (res) => {
        if (res === true) {
          this.isDisliked = true
        }
        
      }
    })
  }


  @Output() likeOrDislike = new EventEmitter<LikeOrDislike>()
  sendId(action: string) {
    if (action === "like") {
      this.isLiked = true
    }
    if (action === "dislike") {
      this.isDisliked = true
    }
    
    this.likeOrDislike.emit({id: this.id, action: action})
  }

  // dislike(id: number) {
  //   this.articleList.onDislike(id);
  // }
}
