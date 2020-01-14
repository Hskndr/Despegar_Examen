import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Delivery} from "../../Class/deliveries";
import {DELIVERIES} from "../../Mock/mock-deliveries";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeliverytwoServService {

  constructor(
    private http: HttpClient
  ) { }

  //API
  getDeliveries(){
    return this.http.get('http://localhost:3000/deliveries/1')
  }
  //MOCK EXAMPLE
  /*getDeliveries(): Observable<Delivery[]> {
    return of (DELIVERIES);
  }*/
}
