import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GeneralService } from '../../general.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  public menus = [];
  public restaurants = [];
  restaurantId;
  totalPrice: number = 0;
  menuLink: string;
  checked = false;

  constructor(private generalService: GeneralService,
              private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.restaurantId = params.get('id');
    });
    this.menuLink = '../assets/data/restaurantData-' + this.restaurantId + '.json';

    this.generalService.getRestaurants()
      .subscribe(data => this.restaurants = data);

    this.generalService.getMenus(this.menuLink)
      .subscribe(data => this.menus = data);
  }

  selectFood(id: number, price: number) {
    const selectedStyle = document.getElementById('checked' + id);
    if (selectedStyle.className === 'grey') {
      this.totalPrice = +this.totalPrice + +price;
      selectedStyle.className = 'green';
      console.log(this.totalPrice);
    } else if (selectedStyle.className === 'green') {
      this.totalPrice = +this.totalPrice - +price;
      selectedStyle.className = 'grey';
      console.log(this.totalPrice);
    }
  }
}
