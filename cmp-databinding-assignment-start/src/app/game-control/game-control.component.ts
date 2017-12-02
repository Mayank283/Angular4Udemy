import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter: number;
  count: number = 0;
  eventInterval;
  @Output() gameEvent = new EventEmitter<{ counter: number }>();

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.eventInterval = setInterval(() => {
      this.gameEvent.emit({ counter: this.count++ });
    }, 1000);
  }

  stop() {
    //this.count = 0;
    clearInterval(this.eventInterval);
  }
}
