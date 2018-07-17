import { Component, Input} from '@angular/core';
import { CartItemModel } from './cart-item-model';
import { CartModel } from './cart-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  @Input() cart: CartModel;
//  title = 'GemStore-July2018';
//  year = new Date().getFullYear();
//  sum = 4 + 2;
//  numbers = [1,2,3,4,5];
//  dog = { name: 'bill', isHungry: true};

cart: CartModel = {
	items: [],
	totalquantity: 0,
	totalprice: 0
	}
}
