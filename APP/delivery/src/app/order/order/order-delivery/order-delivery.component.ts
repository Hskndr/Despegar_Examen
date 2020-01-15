import {Component, OnInit} from '@angular/core';

export interface PeriodicElement {
  producto: string; //Producto
  cantidad: number; //Cantidad
  precioUnitario: number; //Precio Unitario
  total: number; //Total
}

const PRODUCT_DATA: PeriodicElement[] = [
  {producto: 'comida1', cantidad: 1, precioUnitario: 12, total: 12},


];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-order-delivery',
  templateUrl: './order-delivery.component.html',
  styleUrls: ['./order-delivery.component.css']
})
export class OrderDeliveryComponent implements OnInit {
  displayedColumns: string[] = ['producto', 'cantidad', 'precioUnitario', 'total'];
  dataSource = PRODUCT_DATA;

  constructor() {
  }

  ngOnInit() {
  }

}
