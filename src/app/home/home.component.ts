import { Component, OnInit, Input} from '@angular/core';

import { GemModel } from '../gem-model';

import { CartItemModel } from '../cart-item-model';

import { CartModel } from '../cart-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	@Input()
	cart: CartModel;
homeGems: GemModel[] = [
	{
id: 1,
name: 'Dodecahedron',
price: 5.95,
description: 'some gems have special properties. This one certainly does. It\'s the real deal',
fullImagePath: './assets/gem-01.gif',
inventory: 10,
colors: ['red', 'blue', 'green']
},
{
id: 2,
name: 'Pentagonal',
price: 57.99,
description: 'some gems have special properties. This one is super special. Okay? okay he says.',
fullImagePath: './assets/gem-02.gif',
inventory: 0,
colors: ['orange', 'skyblue', 'yellow']


},
{
id: 3,
name: 'Hexagonal',
price: 517.00,
description: 'No gems have special properties. This one is not super special. Okay? okay he says.',
fullImagePath: './assets/gem-03.gif',
inventory: 5,
colors: ['pink', 'white', 'black']


}
];
  constructor() { }

  ngOnInit() {
  }

}
