import { Injectable } from '@angular/core';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  constructor(
    public hardcodedAuthenticationService: HardcodedAuthenticationService,
    public router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthenticationService.isUserLoggedIn()) 
      return true;
    this.router.navigate(['login']);
    return false;
  }
}
