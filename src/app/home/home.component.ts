import { Component, OnInit, Input} from '@angular/core';
import { GemModel } from '../gem-model';
import { CartItemModel } from '../cart-item-model';
import { CartModel } from '../cart-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { ReviewsModel} from '../reviews-model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	@Input()
	cart: CartModel;

	homeGems: GemModel[];

	constructor(private httpClient: HttpClient) { }
  	ngOnInit() {
this.httpClient.get<GemModel[]>('/assets/gems.json').subscribe(results => {this.homeGems = results});	}
}
