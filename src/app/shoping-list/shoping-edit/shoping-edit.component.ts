import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IngerdientModel} from '../../shared/ingerdient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  nameShopping: string = '';
  amountShopping: number = 0;
  showError = false;
  @Output() added =  new EventEmitter<{id: number, name: string, amount: number}>();
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(): void {
    if (this.nameShopping === '' || this.nameShopping === null) {
      this.showError = true;
    } else {
      this.showError = false;
      this.added.emit({id: Date.now(), name : this.nameShopping, amount: this.amountShopping});
      this.onClear();
    }
  }

  onClear() {
    this.showError = false;
    this.nameShopping = '';
    this.amountShopping = 0;
  }
}
