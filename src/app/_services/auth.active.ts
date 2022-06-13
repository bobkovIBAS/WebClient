import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { TokenStorageService } from "./token-storage.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private auth: TokenStorageService, private route: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if(this.auth.getToken()!=null){
            return of(true);
        } else {
            this.route.navigate(['/login'], {
                queryParams:{
                    accessDined: true
                }
            })
            return of(false);
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(childRoute,state);
    }
}