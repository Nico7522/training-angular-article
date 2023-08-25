import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  constructor(private _shopService: ShopService){}
  ngOnInit(): void {
      this._shopService.getUserCommand().subscribe(res => console.log(res)
      )
  }
}
