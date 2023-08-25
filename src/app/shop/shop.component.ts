import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Command } from '../shared/models/command';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  command : Command[] = []
  constructor(private _shopService: ShopService){}
  ngOnInit(): void {
    
      this._shopService.getUserCommand().subscribe(res => console.log(res)
      )
  }

  postCommand() {
    let command: Command = {products: [{product_id: 1, quantity: 2}, {product_id: 2, quantity: 8}]}
    this._shopService.postCommand(command).subscribe(res => console.log(res)
    )
  }
}
