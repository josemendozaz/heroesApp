import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
	name	: 'image',
})
export class ImagePipe implements PipeTransform {

	transform( heroe: Heroe ) : string {
		const heroeImg	= ( heroe.id !== undefined || ( heroe.alt_img !== undefined && heroe.alt_img !== '' ) ) ? ( (  heroe.alt_img !== undefined && heroe.alt_img !== '' ) ? heroe.alt_img : `assets/heroes/${heroe.id}.jpg` ) : `assets/no-image.png`;
		return `${heroeImg}`;
	}

}
