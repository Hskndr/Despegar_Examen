import { Component, OnInit } from '@angular/core';
import {DELIVERIES} from "../../Mock/mock-deliveries";
import {Delivery} from "../../Class/deliveries";
import {DeliveriesServService} from "../services/deliveries-serv.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
