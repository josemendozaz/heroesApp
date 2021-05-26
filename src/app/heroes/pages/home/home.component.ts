import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector	: 'app-home',
	templateUrl	: './home.component.html',
	styles		: [`
		.container {
			margin		: 30px;
			min-height	: 90vh;
		}
		mat-toolbar {
     		word-wrap	: break-word;
    		white-space	: pre-wrap;
		}
		@media( max-device-width: 736px ) and ( max-device-height: 414px ) {}
		@media( max-width: 700px ) {
			footer mat-toolbar {
				height			: 100%;
				padding-top		: 5%;
				padding-bottom	: 5%;
			}
		}
		@media( min-device-width: 768px ) and ( max-height: 500px ) {}
		mat-sidenav {
			background		: url(https://wallpapercave.com/wp/wp2604770.jpg) no-repeat center;
			background-size	: cover;
			color			: #fff;
		}
	`]
})
export class HomeComponent implements OnInit {
	faGithub	= faGithub;
	constructor() { }

	ngOnInit(): void {
	}

}
