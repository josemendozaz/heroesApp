import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';


import { AddHeroesComponent } from './pages/add-heroes/add-heroes.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';

import { ImagePipe } from './pipes/image.pipe';
import { ImagePipeInpure } from './pipes/image-impure.pipe';
import { ConfirmComponent } from './components/confirm/confirm.component';



@NgModule({
	declarations	: [
		AddHeroesComponent,
		HeroeCardComponent,
		HeroeComponent,
		HomeComponent,
		ListComponent,
		SearchComponent,
		ImagePipe,
		ImagePipeInpure,
  ConfirmComponent
  	],
	imports			: [
		CommonModule,
		FlexLayoutModule,
		FontAwesomeModule,
		FormsModule,
		HeroesRoutingModule,
		MaterialModule,
	]
})
export class HeroesModule { }
