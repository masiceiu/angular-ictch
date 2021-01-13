import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router,CanActivateChild} from '@angular/router';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(private authService:AuthService, private router:Router){

  }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Promise<boolean> | boolean
  {
  return  this.authService.isAuthenticated()
    .then((authenticated:boolean)=>{
      if(authenticated){
        return true;
      }
      else{
        this.router.navigate(['/']);
      }
    });
  }

  canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Promise<boolean> | boolean
  {
    return this.canActivate(route,state);
  }         ;
}

// CanActivate is an interface provided by angular router

// angular will implement the code before loading the required route and pass that as arguments to our canACtivate method