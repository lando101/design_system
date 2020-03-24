import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router
  ){ }

  // NICK TAKE A LOOK HERE
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      console.log(this.authService.isLoggedIn);

    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(['login']);
    }
    console.log('CAN ACTIVATE!!!!!!');
    return true;
  }
}
