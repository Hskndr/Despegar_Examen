import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {OrderDeliveryComponent} from "../order/order/order-delivery/order-delivery.component";
import {OrderModule} from "../order/order.module";
import { UserDataComponent } from './user/user-data/user-data.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [UserComponent, UserDataComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    OrderModule,
    MatSelectModule,
    MatInputModule,
  ]
})
export class UserModule { }
