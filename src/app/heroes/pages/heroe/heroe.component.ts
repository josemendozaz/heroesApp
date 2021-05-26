import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
	selector	: 'app-heroe',
	templateUrl	: './heroe.component.html',
	styles	: [`
		img {
			width			: 50%;
			border-radius	: 5px;
			display			: flex;
			margin-left		: 0;
    		margin-right	: 0;
    		margin			: auto;
			justify-content	: center;
		}
		@media( max-device-width: 736px ) and ( max-device-height: 414px ) {
			img {
				width	: 70%!important;
			}
		}
		@media( max-width: 700px ) {
			img {
				width	: 100%;
			}
		}
		@media (min-device-width: 768px) and ( max-height: 500px ) {
		}
	`]
})
export class HeroeComponent implements OnInit {
	heroe		!: Heroe;

	constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router ) { }
	ngOnInit()	: void {
		setTimeout(() =>
		{
			this.activatedRoute.params
				.pipe(
					switchMap( ( params ) =>
						this.heroesService.getHeroeWithId( params.id )
					),
					tap( console.log )
				)
				.subscribe( heroe  => this.heroe = heroe );
		},
		500);
	}
	back() 		: void {
		this.router.navigate(['/heroes/list'])
	}
}
