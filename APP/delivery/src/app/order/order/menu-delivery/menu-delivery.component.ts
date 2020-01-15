import {Component, OnInit} from '@angular/core';
import {TooltipPosition} from "@angular/material/tooltip";
import {FormControl} from "@angular/forms";
import {Menu} from "../../../Class/menues";
import {MenuServService} from "../../services/menu-serv.service";
import {DISHES} from "./mock/mock-dishes";
import {DeliverytwoServService} from "../../../deliverytwo/services/deliverytwo-serv.service";


@Component({
  selector: 'app-menu-delivery',
  templateUrl: './menu-delivery.component.html',
  styleUrls: ['./menu-delivery.component.css']
})
export class MenuDeliveryComponent implements OnInit{

  displayedColumns: string[] = ['dishName', 'price', 'buttons'];
  dataSource = DISHES;




  constructor(

  ) {
  }
   ngOnInit() {

   }
}
