import { Component, OnInit } from '@angular/core';
import {RecipeModel} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: RecipeModel;
  constructor() { }

  ngOnInit(): void {
  }

  onNotify(val: {id: number, name: string, description: string, imagePath: Array<object>, likes: number}): void {
    this.recipes = new RecipeModel(val.id, val.name, val.description, val.imagePath, val.likes);
  }
}
