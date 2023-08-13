import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() titleArticle = ''
  @Input() availabe = true

  getColor(): string {
    if (this.availabe) {
      return "green"
    } else {
      return "red"
    }
  }
}
