import {Component, OnInit, ViewChild, AfterViewInit, Input} from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() totalPrice: number;

  constructor() {
  }

  ngOnInit() {
  }
}
