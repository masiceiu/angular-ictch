
import {Injectable} from '@angular/core';
import {
  CanActivate,ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(private authService:AuthService, private router:Router){

  }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Promise<boolean>
  {
    return  this.authService.isAuthenticated()
    .then((authenticated)=>{
      if(authenticated){
        return true;
      }
      else{
        //this.router.navigate(['/']);
        return false;
      }
    });
  }

  canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Promise<boolean>
  {
    return this.canActivate(route,state);
  }
}