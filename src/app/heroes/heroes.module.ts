import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';


import { HeroesRoutingModule } from './heroes-routing.module';


import { AddHeroesComponent } from './pages/add-heroes/add-heroes.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { ImagePipe } from './pipes/image.pipe';



@NgModule({
	declarations	: [
		AddHeroesComponent,
		SearchComponent,
		HeroeComponent,
		HomeComponent,
		ListComponent,
  HeroeCardComponent,
  ImagePipe
  	],
	imports			: [
		CommonModule,
		FlexLayoutModule,
		MaterialModule,
		HeroesRoutingModule,
	]
})
export class HeroesModule { }
