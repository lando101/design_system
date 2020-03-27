import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";
import { throwError } from "rxjs/internal/observable/throwError";
import { catchError, map, tap, take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';


@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    return true; // this.authService.isLoggedIn; // .isAuthenticated.pipe(take(1), map(isAuth => !isAuth));

  }
} 
