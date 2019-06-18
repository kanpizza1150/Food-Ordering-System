import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './w-space/restaurant-list/restaurant-list.component';
import { MenuListComponent } from './w-space/menu-list/menu-list.component';

const routes: Routes = [
  {path: '', component: RestaurantListComponent},
  {path: 'restaurant/:id', component: MenuListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
