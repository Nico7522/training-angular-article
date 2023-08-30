import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  constructor(private _productService: ProductService) {

    
  }
  isLiked: boolean = false
  @Input() liked!: number;

  @Input() isDisliked!: boolean
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
  }

  @Output() likeProduct = new EventEmitter<number>()
  sendId() {
   this.isLiked = true
    
    this.likeProduct.emit(this.id)
  }

  // dislike(id: number) {
  //   this.articleList.onDislike(id);
  // }
}
