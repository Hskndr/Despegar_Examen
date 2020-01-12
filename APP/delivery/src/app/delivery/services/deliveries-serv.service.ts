import { Injectable } from '@angular/core';
import {Delivery} from "../../Class/deliveries";
import {DELIVERIES} from "../../Mock/mock-deliveries";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeliveriesServService {

  constructor() { }

  getDeliveries(): Observable<Delivery[]> {
    return of (DELIVERIES);
  }
}
