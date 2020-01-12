import { Component, OnInit } from '@angular/core';
import {DELIVERIES} from "../../Mock/mock-deliveries";
import {Delivery} from "../../Class/deliveries";
import {DeliveriesServService} from "../services/deliveries-serv.service";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  deliveries: Delivery[];

   selectDelivery: Delivery;
  constructor(
    private deliService: DeliveriesServService
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
