import {AfterViewChecked, Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {UsersService} from "./users.service";
import {CounterService} from "./counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  numOfActiveToInactive: number = 0;
  numOfInactiveToActive: number = 0;

  constructor(private usersService: UsersService, private counterService: CounterService) {
  }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers
    this.inactiveUsers = this.usersService.inactiveUsers
    this.numOfActiveToInactive = this.counterService.numOfActiveToInactive
    this.numOfInactiveToActive = this.counterService.numOfInactiveToActive
  }

  ngDoCheck() {
    this.numOfActiveToInactive = this.counterService.numOfActiveToInactive
    this.numOfInactiveToActive = this.counterService.numOfInactiveToActive
  }
}
