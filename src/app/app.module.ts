import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './../services/auth.service';
import {AuthGuard} from './../services/guard.service';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent ],
  providers: [AuthService,AuthGuard],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
