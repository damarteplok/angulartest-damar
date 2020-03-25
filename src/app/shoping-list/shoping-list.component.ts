import { Component, OnInit } from '@angular/core';
import {IngerdientModel} from '../shared/ingerdient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingerdients: IngerdientModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(val: {id: number, name: string, amount: number}):void {
    this.ingerdients.push(new IngerdientModel(val.id, val.name, val.amount));
  }

  onRemove(id: number) {
    const idIngerdients = this.ingerdients.findIndex(item => item.id === id);
    this.ingerdients.splice(idIngerdients, 1);
  }
}
