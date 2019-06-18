import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  totalPrice: number;
  isOpen = true;
  constructor() {
  }

  receivePrice($event) {
    this.totalPrice = $event;
    console.log('at app ' + this.totalPrice);
  }

}
