import { Component, OnInit } from '@angular/core';
import {Delivery} from "../../Class/deliveries";
import {DeliverytwoServService} from "../services/deliverytwo-serv.service";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-deliverytwo',
  templateUrl: './deliverytwo.component.html',
  styleUrls: ['./deliverytwo.component.css']
})
export class DeliverytwoComponent implements OnInit {
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



  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
