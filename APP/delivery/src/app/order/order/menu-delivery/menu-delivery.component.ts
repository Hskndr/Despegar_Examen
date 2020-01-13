import {Component, OnInit} from '@angular/core';
import {TooltipPosition} from "@angular/material/tooltip";
import {FormControl} from "@angular/forms";
import {Menu} from "../../../Class/menues";
import {MenuServService} from "../../services/menu-serv.service";

@Component({
  selector: 'app-menu-delivery',
  templateUrl: './menu-delivery.component.html',
  styleUrls: ['./menu-delivery.component.css']
})
export class MenuDeliveryComponent implements OnInit {
  menues : Menu[];

  selectMenu: Menu;
  constructor(
    private menuService: MenuServService
  ) {
  }

  ngOnInit() {
    this.getMenues()
  }

  getMenues(): void {
   /* this.menuService.getMenues()
      .subscribe(menues => this.menues = menues);*/
  }
  onSelect(menu: Menu): void{
    this.selectMenu = menu;
  }
}
