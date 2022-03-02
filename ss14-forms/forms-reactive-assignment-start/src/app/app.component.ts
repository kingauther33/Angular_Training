import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statuses = ["Stable", "Critical", "Finished"];
  forbiddenName = "test";
  projectInfo = {
    name: "",
    email: "",
    status: "Stable",
  };
  formSubmitted = false;

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(
        "",
        // [Validators.required, this.forbiddenProjectName.bind(this)]
        [Validators.required],
        this.forbiddenProjectNameAsync.bind(this)
      ),
      email: new FormControl("", [Validators.required, Validators.email]),
      status: new FormControl("Stable"),
    });

    this.projectForm.valueChanges.subscribe((value) => {
      console.log(this.projectForm);
    });
  }

  forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenName === control.value.toLowerCase()) {
      return { forbiddenName: true };
    }

    return null;
  }

  forbiddenProjectNameAsync(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenName === control.value.toLowerCase()) {
          return resolve({ forbiddenName: true });
        } else {
          return null;
        }
      }, 1500);
    });

    return promise;
  }

  onSubmit() {
    this.formSubmitted = true;

    this.projectInfo = {
      name: this.projectForm.value.name,
      email: this.projectForm.value.email,
      status: this.projectForm.value.status,
    };

    // this.projectForm.reset();
    // formDirective.resetForm();
    // this.projectForm.markAsPristine();
    // this.projectForm.markAsUntouched();
    // this.projectForm.updateValueAndValidity();
    this.projectForm.reset({
      name: "",
      email: "",
      status: this.projectForm.value.status,
    });
  }
}
