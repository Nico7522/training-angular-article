import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() title = ''
  @Input() availabe = true

  getColor(): string {
    if (this.availabe) {
      return "black"
    } else {
      return "red"
    }
  }
}
