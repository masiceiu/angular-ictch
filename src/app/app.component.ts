import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular-smdt';
  isOffcanvas=false;

  onOffcanvasClick = function(){
    //this.isOffcanvas = !this.isOffcanvas;
  }
}
