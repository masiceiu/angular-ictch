import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const appRoutes:Routes=[
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'**', component: NotFoundComponent}
  
]

@NgModule({
imports:[
      RouterModule.forRoot(appRoutes)
],

exports:[RouterModule]
})
export class AppRoutingModule{

}