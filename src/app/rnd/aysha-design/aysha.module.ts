import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBootstrap4Component } from './my-bootstrap4/my-bootstrap4.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MyBootstrap4Component
  ],
  exports: [
    MyBootstrap4Component,
  ]
})
export class AyshaModule { }