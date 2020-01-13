import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MENUES} from "../../Mock/mock-menues";
import {Menu} from "../../Class/menues";

@Injectable({
  providedIn: 'root'
})
export class MenuServService {

  constructor() { }

  getMenues(): Observable<Menu[]> {
    return of (MENUES);
  }
}
