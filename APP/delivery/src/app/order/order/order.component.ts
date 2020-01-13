import { Component, OnInit } from '@angular/core';
import {Delivery} from "../../Class/deliveries";
import {DeliverytwoServService} from "../../deliverytwo/services/deliverytwo-serv.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  deliveries: Delivery[];

  selectDelivery: Delivery;
  constructor(
    private deliService: DeliverytwoServService
  ) { }

  ngOnInit() {
    this.getDeliveries()
  }
  getDeliveries(): void {
    this.deliService.getDeliveries()
      .subscribe(deliveries => this.deliveries = deliveries);
  }
  onSelect(delivery: Delivery): void{
    this.selectDelivery = delivery;
  }
}
