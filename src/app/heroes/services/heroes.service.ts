import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroe.interface';



@Injectable({
	providedIn: 'root'
})

export class HeroesService {

	private apiUrl		: string	= environment.serverUrl;

	get httpParams()	: HttpParams {
		return new HttpParams()
		.set('fields', 'q');
	}

	constructor( private http: HttpClient ) { }

	getHeroes()							: Observable<Heroe[]> {
		console.log( environment );
		return this.http.get<Heroe[]>(`${this.apiUrl}/heroes`);
	}
	getHeroeWithId( argument: string )	: Observable<Heroe> {
		return this.http.get<Heroe>(`${this.apiUrl}/heroes/${argument}`);
	}
	getSuggestions( argument: string )	: Observable<Heroe[]> {
		return this.http.get<Heroe[]>(`${this.apiUrl}/heroes?q=${argument}&_limit=6`);
	}
	addHeroe( heroe: Heroe )			: Observable<Heroe> {
		return this.http.post<Heroe>(`${this.apiUrl}/heroes`, heroe );
	}
	updateHeroe( heroe: Heroe )			: Observable<Heroe> {
		return this.http.put<Heroe>(`${this.apiUrl}/heroes/${heroe.id}`, heroe );
	}
	getImgUrl( url: string )		: Observable<string> {
		return this.http.get<string>(`${url}`);
	}
	deleteHeroe( id: string )			: Observable<any> {
		return this.http.delete<any>(`${this.apiUrl}/heroes/${id}`);
	}
}
