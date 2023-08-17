import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Article } from '../models/article';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css'],
})
export class ModalDetailsComponent implements OnDestroy {
  product?: Article;
  productSub?: Subscription;
  constructor(private list: DataService) {
    this.productSub = this.list.$product.subscribe((prod) => {
      this.product = prod;
    });

    //  this.list._$product.subscribe({
    //   next: (data) => { this.product = data}
    //  })
  }
ngOnDestroy(): void {
    this.productSub?.unsubscribe()
}
  @Input() idArticle!: number;

  @Input() descriptionArticle: string = '';

  getProduct(val: number) {
    this.list.getById(val);
  }
}
