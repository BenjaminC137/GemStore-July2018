import { Component, OnInit, Input } from '@angular/core';

import {CartModel} from '../cart-model';
import {CartItemModel} from '../cart-item-model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']

})
export class NavBarComponent implements OnInit {
@Input()
cart: CartModel;
  constructor() { }

  ngOnInit() {
  }

}
