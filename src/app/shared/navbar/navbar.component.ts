import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  value: string = '';
  filteredProduct!: Article[];
  constructor(private productService: DataService) {}
  getValue() {
    this.productService.onSearch(this.value);
  }
  ngOnInit(): void {


  }
}
