import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: string = 'recipe'

  onPageChange(selectedPage: string, doggo: string) {
    this.currentPage = selectedPage;
    console.log(doggo)
  }
}
