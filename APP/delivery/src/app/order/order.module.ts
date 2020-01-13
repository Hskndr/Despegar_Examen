import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import {MatCardModule} from "@angular/material/card";
import { MenuDeliveryComponent } from './order/menu-delivery/menu-delivery.component';
import { OrderDeliveryComponent } from './order/order-delivery/order-delivery.component';


@NgModule({
  declarations: [OrderComponent, MenuDeliveryComponent, OrderDeliveryComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatCardModule,

  ]
})
export class OrderModule { }
