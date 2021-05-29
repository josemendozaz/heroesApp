import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Auth } from '../interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private privateUrl	: string	= environment.serverUrl;
	// tslint:disable-next-line: variable-name
	private _auth		: Auth|undefined;

	// tslint:disable-next-line: typedef
	get auth()	: Auth {
		// tslint:disable-next-line: no-non-null-assertion
		return { ...this._auth! };
	}

	constructor( private http: HttpClient ) { }

	// checkAuth() : Observable<boolean> | boolean {
	checkAuth() : Observable<boolean> {
		if ( !localStorage.getItem('token') ) {
			// return of(false);
			console.log('!localstore');
			return of(false);
		}
		return this.http.get<Auth>(`${this.privateUrl}/usuarios/1`)
		.pipe(
			map( auth => {
				console.log('map', auth);
				this._auth	= auth;
				return true;
			})
		);
	}


	login()	: any {
		return this.http.get<Auth>(`${this.privateUrl}/usuarios/1`)
		.pipe(
			tap( auth => this._auth	= auth ),
			tap( auth => localStorage.setItem('token', auth.id) )
		);
	}

	logout() : any {
		localStorage.removeItem('token');
		this._auth	= undefined;
	}

}
