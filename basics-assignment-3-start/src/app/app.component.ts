import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number = 1;
  totalCounts = new Array();
  hide: boolean = false;
  style = {};
  display() {
    this.hide = !this.hide;
    this.totalCounts.push(this.count++);
  }

  myStyle() {
    this.style = {
      'background-color': this.totalCounts.length > 4 ? 'blue' : 'transparent',
      'color': this.totalCounts.length > 4 ? 'white' : 'black'
    }
    return this.style;
  }
}
