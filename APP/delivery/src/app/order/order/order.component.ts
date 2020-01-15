import { Component, OnInit } from '@angular/core';
import {Delivery} from "../../Class/deliveries";
import {DeliverytwoServService} from "../../deliverytwo/services/deliverytwo-serv.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  delivery: Delivery[] = [];
  constructor(
    // Service page one
    private deliService: DeliverytwoServService
  ) { }

  ngOnInit() {
    console.log(this.deliService.selectedDelivery);
    this.delivery = this.deliService.selectedDelivery;
  }

}
