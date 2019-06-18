import { Component, OnInit, Input, Output} from '@angular/core';
import { GeneralService } from '../../general.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {


  public restaurants = [];
  public kindRes: string = 'All';
  constructor(private generalService: GeneralService ) {  }

  ngOnInit() {
    this.generalService.getRestaurants()
      .subscribe(data => this.restaurants = data);
  }
}
