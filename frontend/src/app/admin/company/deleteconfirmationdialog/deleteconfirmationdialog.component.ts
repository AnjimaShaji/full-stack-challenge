import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteconfirmationdialog',
  templateUrl: './deleteconfirmationdialog.component.html'
})
export class DeleteconfirmationdialogComponent {
	constructor(public dialogRef: MatDialogRef<DeleteconfirmationdialogComponent>, private router: Router) {}

  closeDialog(confirm: boolean): void {
	    this.closeDialog(confirm);

	}

}
