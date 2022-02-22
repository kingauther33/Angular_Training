import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddIngredient(ingredient: Ingredient) {
    const foundIngredient = this.ingredients.find(el => el.name === ingredient.name);
    const indexOfFoundIngredient = this.ingredients.indexOf(foundIngredient);
    if (~indexOfFoundIngredient) {
      this.ingredients[indexOfFoundIngredient].amount = foundIngredient.amount + ingredient.amount
    } else {
      this.ingredients.push(ingredient)
    }
  }

  onDeleteIngredient(ingredient: Ingredient) {
    const foundIngredient = this.ingredients.find(el => el.name === ingredient.name);
    const indexOfFoundIngredient = this.ingredients.indexOf(foundIngredient)
    if (~indexOfFoundIngredient) {
      if (foundIngredient.amount <= ingredient.amount) {
        this.ingredients.splice(indexOfFoundIngredient, 1);
      } else {
        this.ingredients[indexOfFoundIngredient].amount = foundIngredient.amount - ingredient.amount
      }
    }
  }

}
