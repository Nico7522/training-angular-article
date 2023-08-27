import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Article } from 'src/app/shared/models/article';
import { Product } from 'src/app/shared/models/product';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  article!: Product; 
  constructor(
    private articleList: DataService,
    private _productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    // let articleFound = this.articleList.getById(Number(id))
    // if (articleFound) {
    //   this.article = articleFound
    // }

    let productFound = this._productService.getById(Number(id))
    if (productFound) {
      this.article = productFound
    }
  }
}
