import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnChanges {
  @Input() incrementNumber: number;
  @Input() numbers: number[];
  @Output() onGameStart = new EventEmitter();
  @Output() onGameStop = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.numbers.push(changes.incrementNumber.currentValue)
  }

  ngOnInit(): void {
  }

  gameStart() {
    this.onGameStart.emit();
  }

  gameStop() {
    this.onGameStop.emit();
  }
}
