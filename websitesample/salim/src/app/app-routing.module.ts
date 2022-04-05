import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutusComponent} from './aboutus/aboutus.component'
import {ProductsComponent} from './products/products.component'
import {ContactusComponent} from './contactus/contactus.component'

const routes: Routes = [
  {
    component:AboutusComponent,
    path:'about'
  },
  {
    component:ProductsComponent,
    path:'products'
  },
  {
    component:ContactusComponent,
    path:'contact'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
