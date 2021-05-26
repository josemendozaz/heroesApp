import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [
  ]
})
export class ConfirmComponent implements OnInit {

	constructor( private dialogRef: MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: Heroe ) { }

	ngOnInit(): void {
		console.log( this.data );
	}

	delete()	: void {
		this.dialogRef.close(true);
	}

	close()		: void {
		this.dialogRef.close();
	}
}
