import { Component, OnInit } from '@angular/core';
import {DISHES} from "../mock/mock-dishes";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  displayedColumns: string[] = ['dishName', 'price', 'buttons'];
  dataSource = DISHES;
  constructor() { }

  ngOnInit() {
  }

}
