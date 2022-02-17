import {Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  incrementNumber = 0;
  intervalId: number;
  numbers: number[] = [];

  onGameStart () {
    this.intervalId = setInterval(() => {
      this.incrementNumber++;
    }, 1000)
  }

  onGameStop() {
    clearInterval(this.intervalId)
  }
}
