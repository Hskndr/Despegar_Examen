import { Component, OnInit } from '@angular/core';
import {Delivery} from "../../Class/deliveries";
import {DeliverytwoServService} from "../services/deliverytwo-serv.service";


@Component({
  selector: 'app-deliverytwo',
  templateUrl: './deliverytwo.component.html',
  styleUrls: ['./deliverytwo.component.css']
})
export class DeliverytwoComponent implements OnInit {
  deliveries: Delivery[] = [];

  selectDelivery: Delivery;
  constructor(
    private deliService: DeliverytwoServService
  ) { }

  ngOnInit() {
    this.deliService.getDeliveries().subscribe(
      (data) => {
        this.deliveries = data['results'];
      },
      (error) => {
        console.error(error);
      }
    )
   /* this.getDeliveries()*/
  }
 /* getDeliveries(): void {
    this.deliService.getDeliveries()
      .subscribe(deliveries => this.deliveries = deliveries);
  }*/
  onSelect(delivery: Delivery): void{
    this.selectDelivery = delivery;
  }

}
