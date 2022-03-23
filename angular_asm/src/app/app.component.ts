import {Component, OnChanges, OnInit} from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular_asm';
  isLoggedIn = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.loggedInEmitter.subscribe(data => {
      console.log(data);
      this.isLoggedIn = data;
    });
  }
}
