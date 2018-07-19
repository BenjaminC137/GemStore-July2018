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
  year = new Date().getFullYear();

	cart: CartModel = {
		items: [],
		totalquantity: 0,
		totalprice: 0
	}
}
