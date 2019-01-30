import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class AppGuardService {
    LoggedIn() {
        const isExpired = '';
        return isExpired;
    }
}

@Injectable()
export class SuperAdminGuard implements CanActivate {
    constructor(
        private _router: Router
    ) { }
    canActivate() {
        const isExpired = '';
        if (isExpired && localStorage.getItem("userrole") == "super-admin") {
            return true;
        }
        else {
            this._router.navigate(['/'], { skipLocationChange: true });
        }
    }
}