import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router){
  }

  // NICK TAKE A LOOK HERE
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn) {
      return true;
    }

    console.log("user needs to log in!");
    this.router.navigate(['/auth']);
    return false;

    // if (this.authService.isLoggedIn !== true) {
    //   this.router.navigate(['/auth']);
    // }
    // console.log('CAN ACTIVATE!!!!!!');
    // return true;
  }
}
