import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

	constructor( private authService: AuthService, private router: Router ) {}



  	canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) : Observable<boolean> | Promise<boolean> | boolean {
		// return this.authService.checkAuth();
		return this.authService.checkAuth()
			.pipe(
				tap( isAuthenticated => {
					if ( !isAuthenticated ){
						this.router.navigate(['./auth/login']);
					}
				})
			)
		;

	}
	/* Previene que un usuario cargue el modulo, pero si el modulo ya estaba previamente cargado lo deja ingresar  */
	canLoad( route: Route, segments: UrlSegment[] )	: Observable<boolean> | Promise<boolean> | boolean {
		console.log('canLoad', this.authService.checkAuth());
		return this.authService.checkAuth()
			.pipe(
				tap( isAuthenticated => {
					if ( !isAuthenticated ){
						this.router.navigate(['./auth/login']);
					}
				})
			)
		;
	}
}
