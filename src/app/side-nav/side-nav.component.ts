import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {GeneralService} from '../general.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public restaurants = [];
  //private kindRes: string;
  constructor(private generalService: GeneralService ) {  }
  public kinds = ['All', 'Thai Restaurant', 'Bar & Restaurant', 'Dessert', 'Seafood', 'Cafe'];
  selectedKind:string;
  @Output() public sendKind = new EventEmitter();

  ngOnInit() {
    this.generalService.getRestaurants()
      .subscribe(data => this.restaurants = data);
  }

  getKind( _kind: string ) {
    this.selectedKind = _kind;
    console.log(_kind);
    this.sendKind.emit(_kind);

  }

}
