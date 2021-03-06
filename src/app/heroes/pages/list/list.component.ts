import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';


@Component({
	selector	: 'app-list',
	templateUrl	: './list.component.html',
	styles		: [`
		mat-card {
			margin-top : 20px;
		}
	`]
})
export class ListComponent implements OnInit {

	constructor( private heroesService: HeroesService ) { }
	heroes		: Heroe[]	= [];
	ngOnInit()	: void {
		this.heroesService.getHeroes().subscribe( resp => this.heroes = resp );
	}

}
