import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Command } from '../shared/models/command';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  command: Command[] = [];
  constructor(private _shopService: ShopService) {}
  ngOnInit(): void {
  }
}
