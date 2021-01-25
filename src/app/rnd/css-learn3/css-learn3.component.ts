import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-learn3',
  templateUrl: './css-learn3.component.html',
  styleUrls: ['./css-learn3.component.css']
})
export class CssLearn3Component implements OnInit {

  @Input() rnd = 'rnd1';
  constructor() { }

  ngOnInit() {
  }

}