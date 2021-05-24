import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListComponent } from './pages/list/list.component';
import { AddHeroesComponent } from './pages/add-heroes/add-heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';


const routes : Routes	= [
	{
		path		: '',
		component	: HomeComponent,
		children	: [
			{
				path		: 'list',
				component	: ListComponent
			},
			{
				path		: 'add',
				component	: AddHeroesComponent
			},
			{
				path		: 'edit/:id',
				component	: AddHeroesComponent
			},
			{
				path		: 'search',
				component	: SearchComponent
			},
			{
				path		: 'detail/:id',
				component	: HeroeComponent
			},
			{
				path		: '**',
				redirectTo	: 'list'
			},
		]
	}
];


@NgModule({
	declarations	: [],
	imports			: [
		RouterModule.forChild( routes )
	],
	exports			: [
		RouterModule
	]
})
export class HeroesRoutingModule { }
