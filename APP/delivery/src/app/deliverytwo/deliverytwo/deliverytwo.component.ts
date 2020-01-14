import {Component, OnInit} from '@angular/core';
import {DeliverytwoServService} from "../services/deliverytwo-serv.service";
import {Delivery} from "../../Class/deliveries";

@Component({
  selector: 'app-deliverytwo',
  templateUrl: './deliverytwo.component.html',
  styleUrls: ['./deliverytwo.component.css']
})
export class DeliverytwoComponent implements OnInit {
  deliveries: any[] = [];

  selectedDelivery: Delivery;
  constructor(
    private deliService: DeliverytwoServService
  ) {
  }

  ngOnInit() {
    this.deliService.getAllDeliveries()
      .subscribe(
        (data) => {
          this.deliveries = data;
          //Debug
          console.log('results');
          console.log(data);

        },
        (error) => {
          console.error(error);
        }
      );
    /* this.getDeliveries()*/
  }

  /* getDeliveries(): void {
     this.deliService.getDeliveries()
       .subscribe(deliveries => this.deliveries = deliveries);
   }*/
  onSelect(delivery: Delivery): void {
    this.selectedDelivery = delivery;
  }

}
