import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ProductsComponent} from './products/products.component';
import {ContactusComponent} from './contactus/contactus.component';
import {SigninComponent} from './signin/signin.component';
import {RegisterComponent} from './register/register.component';
import { CareerComponent } from './career/career.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    component:MainComponent,
    path:'main'
  },
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
  },
  {
    component:SigninComponent,
    path:'signin'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:CareerComponent,
    path:'career'
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
