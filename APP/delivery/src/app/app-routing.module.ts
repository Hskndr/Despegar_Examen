import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from "./core/not-found/not-found.component";


const routes: Routes = [

  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'delivery/:id',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  },
  {
    path: '',
    loadChildren: () => import('./deliverytwo/deliverytwo.module').then(m => m.DeliverytwoModule)
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
