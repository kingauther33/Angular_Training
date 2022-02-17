import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef: ElementRef

  @Output() firedAddData = new EventEmitter<Ingredient>()
  @Output() firedDeleteData = new EventEmitter<Ingredient>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onClear() {
    this.nameInputRef.nativeElement.value = ''
    this.amountInputRef.nativeElement.value = 0
  }

  onSubmit() {
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value
    const ingredient = new Ingredient(ingName, ingAmount)
    this.firedAddData.emit(ingredient)
  }

  onDelete() {
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value
    const ingredient = new Ingredient(ingName, ingAmount)
    this.firedDeleteData.emit(ingredient)
  }

}
