import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';


const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'**',redirectTo:'/not-found',pathMatch:'full'}
  
]

@NgModule({
imports:[
      RouterModule.forRoot(appRoutes)
],

exports:[RouterModule]
})
export class AppRoutingModule{

}