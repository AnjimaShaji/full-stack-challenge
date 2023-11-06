import { Component } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { Router } from '@angular/router';
// import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-delcompany',
  templateUrl: './delcompany.component.html',
  styleUrls: ['./delcompany.component.css']
})
export class DelcompanyComponent {

	constructor(private backend:BackendService, private router: Router) {}

	// closeDialog(confirm: boolean): void {
	//     this.dialogRef.close(confirm);

	// }

 //  openDeleteConfirmationDialog(): void {
 //    const dialogRef = this.dialog.open(DelcompanyComponent);

 //    dialogRef.afterClosed().subscribe((result: boolean) => {
 //      if (result === true) {
 //        this.delCompany();
 //      }
 //    });
 //  }

	// delCompany() {
	// 	if(confirm("Are you sure to delete ")) {
	// 	  	console.log("Implement delete functionality here");
	//   	}
	// }	
}
