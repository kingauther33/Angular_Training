import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(["/login"]);
  }
}
