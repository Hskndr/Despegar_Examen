import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliverytwoRoutingModule } from './deliverytwo-routing.module';
import { DeliverytwoComponent } from './deliverytwo/deliverytwo.component';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { FilterComponent } from './deliverytwo/filter/filter.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [DeliverytwoComponent, FilterComponent],
  imports: [
    CommonModule,
    DeliverytwoRoutingModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,

  ]
})
export class DeliverytwoModule { }
