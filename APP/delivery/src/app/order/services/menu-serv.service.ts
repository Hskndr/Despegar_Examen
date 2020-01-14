import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MENUES} from "../../Mock/mock-menues";
import {Menu} from "../../Class/menues";
import {HttpClient} from "@angular/common/http";
import {Delivery} from "../../Class/deliveries";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MenuServService {

  constructor(
    private http: HttpClient
  ) { }
  getDeliveriesById(id){
    return this.http.get<Delivery[]>(`${environment.apiUrl}/deliveries/?id=`+id)
  }
  getMenues(): Observable<Menu[]> {
    return of (MENUES);
  }
}
