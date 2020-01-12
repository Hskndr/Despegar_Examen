import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeliverytwoComponent} from "./deliverytwo/deliverytwo.component";


const routes: Routes = [
  {
    path: '',
    component: DeliverytwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliverytwoRoutingModule { }
