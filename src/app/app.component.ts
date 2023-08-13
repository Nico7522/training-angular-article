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

  liste = [
    {
      titleArticle: "Vélo",
      priceArticle: 200,
      description: "Vélo nouvelle collection",
      textAltImg: "alternative title",
      urlImg:  "https://via.placeholder.com/400x250",
      available: true
    },
    {
      titleArticle: "Bateau",
      priceArticle: 1777,
      description: "Bateau nouvelle collection",
      textAltImg: "alternative title",
      urlImg:  "https://via.placeholder.com/400x250",
      available: true
    },
    {
      titleArticle: "Voile",
      priceArticle: 999,
      description: "Voile nouvelle collection",
      textAltImg: "alternative title",
      urlImg:  "https://via.placeholder.com/400x250",
      available: false
    },
  ]
}
