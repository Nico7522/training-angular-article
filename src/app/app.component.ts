import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'labonneaffaire';
  message: string = ""
  getMessage(message: string) {
    this.message = message
  }
}
