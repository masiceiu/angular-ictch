import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RndComponent } from './rnd/rnd.component';;
import { CssLearn3Component } from './rnd/css-learn3/css-learn3.component';

@NgModule({
  imports: [
    CommonModule, BrowserModule
  ],
  declarations: [
    RndComponent,
    CssLearn3Component,
    ]
})
export class RndModule { }