import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() notifyParent =  new EventEmitter<{id: number, name: string, description: string, imagePath: Array<object>, likes: number}>();
  next = 0;
  endnext = 3;
  totImg = 1;
  recipes: RecipeModel[] = [
    new RecipeModel(1, 'Twice Recipe1', 'How to make twice1 girl groups', [{name: 'https://upload.wikimedia.org/wikipedia/' +
      'commons/0/06/180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_%2818%29.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'}], 0),
    new RecipeModel(2, 'Twice Recipe2', 'How to make twice2 girl groups', [{name: 'https://upload.wikimedia.org/wikipedia/' +
        'commons/0/06/180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_%2818%29.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'}], 0),
    new RecipeModel(3, 'Twice Recipe3', 'How to make twice3 girl groups', [{name: 'https://upload.wikimedia.org/wikipedia/' +
        'commons/0/06/180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_%2818%29.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'}], 0),
    new RecipeModel(4, 'Twice Recipe4', 'How to make twice1 girl groups', [{name: 'https://upload.wikimedia.org/wikipedia/' +
        'commons/0/06/180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_%2818%29.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'}], 0),
    new RecipeModel(5, 'Twice Recipe5', 'How to make twice2 girl groups', [{name: 'https://upload.wikimedia.org/wikipedia/' +
        'commons/0/06/180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_%2818%29.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'}], 0),
    new RecipeModel(6, 'Twice Recipe6', 'How to make twice3 girl groups', [{name: 'https://upload.wikimedia.org/wikipedia/' +
        'commons/0/06/180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_%2818%29.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'},
      {name : 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/12/01/1664928256.jpg'}], 0),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onPlusLikes(id: number): void {
    const idPlus = this.recipes.findIndex(item => item.id === id);
    this.recipes[idPlus].likes = this.recipes[idPlus].likes + 1;
  }

  onMinLikes(id: number): void {
    const idMin = this.recipes.findIndex(item => item.id === id);
    if (this.recipes[idMin].likes > 0) {
      this.recipes[idMin].likes = this.recipes[idMin].likes - 1;
    }
  }

  onNext(): void {
    if (this.endnext < this.recipes.length) {
      this.next = this.next + 3;
      this.endnext = this.endnext + 3;
    }
  }

  onBack(): void {
    if (this.next !== 0) {
      this.next = this.next - 3;
      this.endnext = this.endnext - 3;
    }
  }

  onAdd(val: {id: number, name: string, description: string, imagePath: Array<object>, likes: number}): void {
    this.recipes.unshift(new RecipeModel(val.id, val.name, val.description, val.imagePath, val.likes));
  }

  onEmit(id: number): void {
    const idEmit = this.recipes.findIndex(item => item.id === id);
    this.notifyParent.emit(this.recipes[idEmit]);
  }

}
