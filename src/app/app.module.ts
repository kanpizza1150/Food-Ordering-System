import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


import { NavComponent } from './nav/nav.component';
import { WSpaceComponent } from './w-space/w-space.component';
import { RestaurantListComponent } from './w-space/restaurant-list/restaurant-list.component';
import { MenuListComponent } from './w-space/menu-list/menu-list.component';

import { GeneralService } from './general.service';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WSpaceComponent,
    RestaurantListComponent,
    MenuListComponent,
    SideNavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
