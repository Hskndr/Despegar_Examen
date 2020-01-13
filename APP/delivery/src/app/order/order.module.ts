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


@NgModule({
  declarations: [OrderComponent, MenuDeliveryComponent, OrderDeliveryComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatCardModule,
    FormsModule,
    MatGridListModule,
    MatTreeModule,
    MatButtonToggleModule,
    MatTableModule

  ]
})
export class OrderModule {
}
