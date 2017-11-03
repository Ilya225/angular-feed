import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad, Route
  } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanLoad, CanActivate, CanActivateChild {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(route);
        console.log(state);
        return true;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return true;
    }

    canLoad(route: Route): boolean {
        console.log(route);
        return true;
    }
}