/**
 * @imports Importaciones de Angular
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
/**
 * @imports Interfaces
 */
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
/**
 * @imports Servicios
 */
import { HeroesService } from '../../services/heroes.service';
/**
 * @imports Componentes
 */
import { ConfirmComponent } from '../../components/confirm/confirm.component';
/**
 * @decorator Decorador
 */
@Component({
  selector: 'app-add-heroes',
  templateUrl: './add-heroes.component.html',
  styleUrls: ['./add-heroes.component.css']
})
/**
 * @class AddHeroesComponent
 */
export class AddHeroesComponent implements OnInit {
	/**
	 * @var
	 */
	registering				: boolean		= false;
	publishers								= [
		{
			id: 'DC Comics',
			desc: 'DC - Comics'
		},
		{
			id: 'Marvel Comics',
			desc: 'Marvel - Comics'
		}
	];
	superheroToDelete			: string	= '';
	durationInSeconds			: number	= 5;
	heroe						: Heroe		= {
		superhero			: '',
		alter_ego			: '',
		characters			: '',
		first_appearance	: '',
		publisher			: Publisher.DCComics,
		alt_img				: ''
	};
	/**
	 * @desc	constructor
	 */
	// tslint:disable-next-line: max-line-length
	constructor(  private activatedRoute: ActivatedRoute, private router: Router, private heroesService: HeroesService, private _snackBar: MatSnackBar, public dialog: MatDialog ) { }
	/**
	 * @desc	ngOnInit
	 */
	ngOnInit()				: void {
		if ( this.router.url.includes('edit') ) {
			this.activatedRoute.params
				.pipe(
					switchMap(
						( { id } ) => this.heroesService.getHeroeWithId( id )
					)
				)
				.subscribe(
					( heroe: Heroe ) => {
						this.heroe	= heroe;
					},
					( err: HttpErrorResponse ) => {
						if ( err.status === 404 ) {
							this.router.navigate(['/heroes/list']);
						}
					}
				);
		}
	}
	/**
	 * @des	save
	 * @description	Registra un Héroe
	 */
	save()		: void {
		this.registering	= true;
		if (
			( this.heroe.superhero.trim().length === 0 ) ||
			( this.heroe.alter_ego.trim().length === 0 ) ||
			( this.heroe.characters.trim().length === 0 ) ||
			( this.heroe.first_appearance.trim().length === 0 ) ||
			( this.heroe.publisher.trim().length === 0 )
		) {
			this.registering	= false;
			return;
		}
		if ( this.heroe.id === undefined ) {
			this.heroesService.addHeroe( this.heroe )
				.subscribe( heroe => {
					this.registering	= false;
					this.showSnakbar('Héroe Registrado');
					this.router.navigate(['/heroes/heroe/edit/', heroe.id]);
				});
		} else {
			this.heroesService.updateHeroe( this.heroe )
				.subscribe( heroe => {
					this.registering	= false;
					this.showSnakbar('Héroe Actualizado');
					this.router.navigate(['/heroes/heroe/edit/', heroe.id]);
				});
		}
	}
	/**
	 * @desc	delete
	 * @description	Elimina un héroe
	 */
	delete()	: void {
		const dialog	= this.dialog.open( ConfirmComponent, {
			width	: '40%',
			data	: { ...this.heroe }
		});
		setTimeout(() =>
		{
			dialog.afterClosed().subscribe(
				( resp ) => {
					if ( resp ) {
						this.registering	= true;
						this.heroesService.deleteHeroe( this.heroe.id! )
							.subscribe( heroe => {
								this.registering	= false;
								this.showSnakbar('Héroe Eliminado');
								this.router.navigate(['/heroes/list']);
							});
					}
				}
			);
		},
		500);
	}
	/**
	 * @desc		showSnakbar
	 * @param		message:	string
	 * @description	Muestra alerta Snakbar
	 */
	showSnakbar( message: string )	: void	{
		this._snackBar.open( message, 'Cerrar', {
			duration	: this.durationInSeconds * 1000,
		});
	}

}
