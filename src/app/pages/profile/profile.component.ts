import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [
    'profile.component.css'
  ],
  selector: 'profile'
})
export class ProfileComponent {
  public title = 'Profile';
  public isCollapsed:boolean = false;
  
   public collapsed(event:any):void {
     console.log(event);
   }
  
   public expanded(event:any):void {
     console.log(event);
   }
    
}