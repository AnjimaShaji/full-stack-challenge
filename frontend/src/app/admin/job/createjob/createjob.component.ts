import { BackendService } from '../../../services/backend.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css']
})
export class CreatejobComponent {
	form = {
		job:null,
		role:null,
		type:null,
		company_id:null,
		experience:null,
		salary:null,
		description:null		
	}
	constructor(private backend:BackendService, private router: Router) { }
	public error:any = [];
	companies:any = [];
	companyId:any=[];
	type:any=[];
	showNavbar: boolean = true;
	ngOnInit(): void {
		this.viewCompany()
	}

	viewCompany(){
	  this.backend.getCompany().subscribe(
	    (response:any) => {
	      this.companies = response;
	    }
	  );
	}

	onSelected(value:string) {
		this.companyId = value;
	}

	selectType(value:string) {
		this.type = value;
	}
	
 	createJob() {
 		this.form.company_id = this.companyId;
 		this.form.type = this.type;
		return this.backend.createJob(this.form).subscribe(
			data=>this.router.navigate(['/view-job']),
			error=>this.handleError(error),
		);
	}

	handleError(error:any) {
		this.error = error.error;
	}

}
