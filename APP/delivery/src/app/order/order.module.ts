import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderComponent} from './order/order.component';
import {MatCardModule} from "@angular/material/card";
import {MenuDeliveryComponent} from './order/menu-delivery/menu-delivery.component';
import {OrderDeliveryComponent} from './order/order-delivery/order-delivery.component';
import {FormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTreeModule} from "@angular/material/tree";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTableModule} from "@angular/material/table";
import { MenuComponent } from './order/menu-delivery/menu/menu.component';
import { DishComponent } from './order/menu-delivery/dish/dish.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { ButtonsComponent } from './order/buttons/buttons.component';


@NgModule({
  declarations: [OrderComponent, MenuDeliveryComponent, OrderDeliveryComponent, MenuComponent, DishComponent, ButtonsComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatCardModule,
    FormsModule,
    MatGridListModule,
    MatTreeModule,
    MatButtonToggleModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  exports:[
    OrderDeliveryComponent,
    ButtonsComponent
  ]
})
export class OrderModule {
}
