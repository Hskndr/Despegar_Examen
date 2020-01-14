import { Injectable } from '@angular/core';
import {Delivery} from "../../Class/deliveries";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DeliverytwoServService {

  constructor(
    private http: HttpClient
  ) { }

  //API
  getAllDeliveries(){
    return this.http.get<Delivery[]>(`${environment.apiUrl}/deliveries`)
  }
  //MOCK EXAMPLE
  /*getDeliveries(): Observable<Delivery[]> {
    return of (DELIVERIES);
  }*/
}
