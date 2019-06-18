import {Component, EventEmitter, OnInit, Output, AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-w-space',
  templateUrl: './w-space.component.html',
  styleUrls: ['./w-space.component.scss']
})
export class WSpaceComponent implements OnInit {
  totalPrice: number = 0;
  constructor() {  }

  ngOnInit() {
  }


}
