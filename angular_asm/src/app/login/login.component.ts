import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {User} from "../user.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl("", [Validators.required]),
      'password': new FormControl("", Validators.required)
    })

    this.signupForm.statusChanges.subscribe((status) => console.log(status))
  }

  onSubmit() {
    console.log(this.signupForm)
    // const username = this.signupForm.controls['username'].value;
    // const password = this.signupForm.controls['password'].value;
    // const user: User = new User(username, password);
    this.userService.login().subscribe(data => {
      this.userService.getUserById(data.userId).subscribe(userData => {
        this.userService.setUser(userData.id, userData.name, userData.createdAt);
      });
    })

    console.log(this.userService.getUser());
    this.router.navigate(["/profile"]);
  }
}
