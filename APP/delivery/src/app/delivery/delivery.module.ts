import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryComponent } from './delivery/delivery.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [DeliveryComponent],
    imports: [
        CommonModule,
        DeliveryRoutingModule,
        FormsModule
    ]
})
export class DeliveryModule { }
