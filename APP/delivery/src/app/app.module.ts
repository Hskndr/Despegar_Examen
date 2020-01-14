import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {CoreModule} from "./core/core.module";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {DeliverytwoServService} from "./deliverytwo/services/deliverytwo-serv.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Material
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    DeliverytwoServService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
