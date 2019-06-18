import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { restaurant } from './models/restaurant-list';
import { menu } from './models/menu-list';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class GeneralService {
  private restaurantUrl = '../assets/data/restaurantData.json';

  //private restaurantUrl = 'https://order-plz.herokuapp.com/restaurants.json';
  constructor(private http: HttpClient ) { }
  getRestaurants(): Observable<restaurant[]> {
    return this.http.get<restaurant[]>(this.restaurantUrl);
  }

  getMenus(menuLink: string): Observable<menu[]> {
  return this.http.get<menu[]>(menuLink);
  }

}
