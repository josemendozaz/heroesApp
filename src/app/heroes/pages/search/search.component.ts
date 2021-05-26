import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
	selector	: 'app-search',
	templateUrl	: './search.component.html',
	styles		: [
	]
})

export class SearchComponent implements OnInit {

	argument		: string	= '';
	heroes			: Heroe[]	= [];
	heroeSelected	!: Heroe;

	constructor( private heroesService: HeroesService ) { }

	ngOnInit()	: void {
	}

	searching() : void {
		this.heroesService.getSuggestions( this.argument.trim() ).subscribe(
			heroes => this.heroes = heroes
		)
	}

	userSelectedOption( event: MatAutocompleteSelectedEvent )	: void {
		if ( event.option.value === '' ) { return; }
		const heroe	: Heroe	= event.option.value;
		this.argument		= heroe.superhero;
		this.heroesService.getHeroeWithId( heroe.id! )
		.subscribe( heroe => this.heroeSelected = heroe );
		this.heroes			= [];
	}

}
