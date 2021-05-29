import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from '../../../auth/services/auth.service';

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

	// auth!		: Auth;

	// tslint:disable-next-line: typedef
	get auth(){
		return this.authService.auth;
	}


	constructor( private router: Router, private authService: AuthService ) { }

	ngOnInit()	: void {
	}

	logout()	: void {
		this.authService.logout();
		this.router.navigate(['./auth']);
	}


}
