import { Component } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { Router, ActivatedRoute } from '@angular/router';
import {  HttpClient } from '@angular/common/http';
// import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-delcompany',
  templateUrl: './delcompany.component.html',
  styleUrls: ['./delcompany.component.css']
})
export class DelcompanyComponent {

	constructor(private backend:BackendService, private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {}
	userid:any = null;

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

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
		  this.userid = params['id']
		}); 
		this.deleteCompany(this.userid);
	}

	deleteCompany(userid:any) {
		this.httpClient.get<any>(`http://127.0.0.1:8000/api/delete-company/${this.userid}`).subscribe(
	    response => {
	      this.router.navigate(['/viewcompany'])
	    }
	  );
	}	
}
