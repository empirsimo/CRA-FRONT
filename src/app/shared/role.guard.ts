import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private auth : AuthService, private router: Router){
  }
  canActivate(route: ActivatedRouteSnapshot){
    var roles = route.data.roles;
   if(!this.auth.isHasRoles(roles)){
    alert("Vous n'êtes pas connecté");
    this.router.navigate(['login']);
    return false;
   }
   return true;
  }
  
}
