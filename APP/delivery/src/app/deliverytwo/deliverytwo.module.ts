import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliverytwoRoutingModule } from './deliverytwo-routing.module';
import { DeliverytwoComponent } from './deliverytwo/deliverytwo.component';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { FilterComponent } from './deliverytwo/filter/filter.component';


@NgModule({
  declarations: [DeliverytwoComponent, FilterComponent],
  imports: [
    CommonModule,
    DeliverytwoRoutingModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,

  ]
})
export class DeliverytwoModule { }
