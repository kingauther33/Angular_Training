import { Component } from '@angular/core';
import {element} from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisplayingParagraph = true;
  logs = [];
  numOfLogs = 0;

  toggleParagraph() {
    this.isDisplayingParagraph = !this.isDisplayingParagraph;
    this.numOfLogs++;
    this.logs.push(new Date());
  }

  checkLogs() {
    return this.numOfLogs >= 5;
  }
}
