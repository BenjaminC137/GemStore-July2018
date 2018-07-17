import { Component, OnInit, Input } from '@angular/core';

import { GemModel } from '../gem-model';

import { CartItemModel } from '../cart-item-model';

import { CartModel } from '../cart-model';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {

	@Input()
	gem: GemModel;

  	constructor() { }
	ngOnInit() { }

	@Input()
	cart: CartModel;

addToCart(){
		this.gem.inventory = this.gem.inventory -1
		this.cart.totalquantity = this.cart.totalquantity +1;
		if(this.gem.inventory <= 0){
			this.gem.name = this.gem.name + ' [SOLD OUT]';

		}
	}
}
