import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RndComponent } from './rnd/rnd.component';;
import { CssLearn3Component } from './rnd/css-learn3/css-learn3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RndComponent,
    CssLearn3Component,
    ]
})
export class RndModule { }