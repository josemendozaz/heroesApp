import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  	selector	: 'app-heroe-card',
  	templateUrl	: './heroe-card.component.html',
  	styles		: [`
  		mat-card {
	  		margin-top : 25px;
  		}
	`]
})

export class HeroeCardComponent implements OnInit {

	@Input() heroeForCard!: Heroe;

	constructor() { }

	ngOnInit(): void {
	}

}
