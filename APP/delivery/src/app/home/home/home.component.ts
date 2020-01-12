import { Component, OnInit } from '@angular/core';
import {DELIVERIES} from "../../Mock/mock-deliveries";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  deliveries = DELIVERIES;
  constructor() { }

  ngOnInit() {
  }

}
