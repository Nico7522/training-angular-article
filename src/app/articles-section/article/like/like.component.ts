import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { LikeOrDislike } from 'src/app/shared/interfaces/like-dislike.interface';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  constructor(private _productService: ProductService, private _authService: AuthService) {}
  isLiked: boolean = false;
  isDisliked: boolean = false;
  @Input() like!: number;
  @Input() dislike!: number;
  @Input() title: string = '';
  @Input() id!: number;

  ngOnInit(): void {
    this._productService.isLiked(this.id).subscribe({
      next: (res) => {
        if (res === true) {
          this.isLiked = true;
        }
      },
    });

    this._productService.isDisliked(this.id).subscribe({
      next: (res) => {
        if (res === true) {
          this.isDisliked = true;
        }
      },
    });
  }
  @Output() likeOrDislike = new EventEmitter<LikeOrDislike>();
  sendId(action: string) {
    if (this._authService.isConnected()) {
      if (action === 'like') {
        this.isLiked = !this.isLiked;
      }
      if (action === 'dislike') {
        this.isDisliked = !this.isDisliked
      }
      this.likeOrDislike.emit({ id: this.id, action: action });
      
    }
  }
}
