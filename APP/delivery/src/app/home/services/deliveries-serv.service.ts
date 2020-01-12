import { Injectable } from '@angular/core';
import {Delivery} from "../../Class/deliveries";
import {DELIVERIES} from "../../Mock/mock-deliveries";

@Injectable({
  providedIn: 'root'
})
export class DeliveriesServService {

  constructor() { }

  getDeliveries(): Delivery[] {
    return DELIVERIES;
  }
}
