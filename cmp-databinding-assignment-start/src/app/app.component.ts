import { Component } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appCounter: number;

  addNumber(event) {
    this.appCounter = event.counter;
  }
}
