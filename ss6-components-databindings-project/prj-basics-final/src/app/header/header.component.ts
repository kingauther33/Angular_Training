import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapsed = false;
  @Output() firedNavigate = new EventEmitter<string>()

  onSelect(path: string){
    this.firedNavigate.emit(path);
  }
}
