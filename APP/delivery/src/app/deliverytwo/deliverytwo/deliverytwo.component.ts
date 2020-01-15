import {Component, OnInit} from '@angular/core';
import {DeliverytwoServService} from "../services/deliverytwo-serv.service";
import {Delivery} from "../../Class/deliveries";
import {Router} from "@angular/router";

@Component({
  selector: 'app-deliverytwo',
  templateUrl: './deliverytwo.component.html',
  styleUrls: ['./deliverytwo.component.css']
})
export class DeliverytwoComponent implements OnInit {
  deliveries: any[] = [];
  selectedDelivery: Delivery;
  constructor(
    //Service Deliveries page
    private deliService: DeliverytwoServService,
    private router: Router
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
    //save the data on variable
    this.deliService.selectedDelivery = delivery;
    // move to second page
    this.router.navigate(['order']);
  }

}
