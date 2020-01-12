import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Delivery} from "../../Class/deliveries";
import {DELIVERIES} from "../../Mock/mock-deliveries";

@Injectable({
  providedIn: 'root'
})
export class DeliverytwoServService {

  constructor() { }

  getDeliveries(): Observable<Delivery[]> {
    return of (DELIVERIES);
  }
}
