import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';

import {AppRoutingModule} from './app.routing.module';
import {AuthService} from './common/services/auth.service';
import {AuthGuard} from './common/services/guard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ToolBarComponent } from './shared/component/tool-bar/tool-bar.component';

@NgModule({
  imports:      
  [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule 
  ],
  declarations: 
  [ 
    AppComponent,
    HomeComponent,
    ToolBarComponent 
  ],
  providers: 
  [
    AuthService,
    AuthGuard
  ],
  bootstrap:    
  [ 
    AppComponent 
  ]
})
export class AppModule { }
