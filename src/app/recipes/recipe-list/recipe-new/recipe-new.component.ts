import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {
  @Input() total?: number;
  @Output() added =  new EventEmitter<{id: number, name: string, description: string, imagePath: Array<object>, likes: number}>();
  recipes: Array<{id: number, name: string, description: string, imagePath: Array<{name: string}>, likes: number}> = [];
  bolShow = false;
  bolShowSuccess = false;

  constructor() {
    this.recipes = [{
      id: Date.now(),
      name: '',
      description: '',
      imagePath: [{name: ''}],
      likes: 0
    }];
  }

  ngOnInit(): void {
  }

  onClear(): void {
    this.recipes = [{
      id: Date.now(),
      name: '',
      description: '',
      imagePath: [{name: ''}],
      likes: 0
    }];
  }

  onRemoveImg(): void {
    if (this.recipes[0].imagePath.length > 1) {
      this.recipes[0].imagePath.pop();
    }
  }

  onAdd(): void {
    this.bolShow = false;
    this.bolShowSuccess = false;
    if (this.recipes[0].name === ''
      || this.recipes[0].name === null
      || this.recipes[0].description === ''
      || this.recipes[0].description == null) {
      this.bolShow = true;
    } else {
      for (let i = 0; i < this.recipes[0].imagePath.length; i++) {
        if (this.recipes[0].imagePath[i].name === '' || this.recipes[0].imagePath[i].name === null) {
          this.bolShow = true;
          break;
        }
      }
      if (!this.bolShow) {
        this.bolShowSuccess = true;

        this.added.emit(this.recipes[0]);
        this.recipes = [{
          id: Date.now(),
          name: '',
          description: '',
          imagePath: [{name: ''}],
          likes: 0
        }];

        setTimeout(() => {
          this.bolShowSuccess = false;
        }, 1500);
      }
    }
  }

  onAddImg(): void {
    this.recipes[0].imagePath.push({name: ''});
  }

}
