import { Component } from '@angular/core';
import {ViewChild} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("f") signupForm;
  defaultSubscription = 'Advanced';

  userData = {
    email: '',
    subscription: '',
    password: '',
  };
  formSubmitted = false;

  onSubmit() {
    console.log(this.signupForm.form.value)
    this.formSubmitted = true;

    this.userData.email = this.signupForm.form.value.email;
    this.userData.subscription = this.signupForm.form.value.subscriptions;
    this.userData.password = this.signupForm.form.value.password;

    this.signupForm.reset();
  }
}
