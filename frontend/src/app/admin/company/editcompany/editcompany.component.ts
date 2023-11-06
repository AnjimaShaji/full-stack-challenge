import { Component, Input } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import {  HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})
export class EditcompanyComponent {
	constructor(private backend:BackendService, private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }
	showNavbar: boolean = true;
	userid:any = [];
	companyInfo:any = [];
	form = {
		email:null,
		location:null,
		industry:1		
	}
	public error:any = [];

	@Input() name = '';
	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
		  this.userid = params['id']
		}); 
		this.companyDetails();
	}

	companyDetails() {
	  this.httpClient.get<any>(`http://127.0.0.1:8000/api/company-details/${this.userid}`).subscribe(
	    response => {
	      this.companyInfo = response.companyDetails as string[];
	      console.log(this.companyInfo);
	    }
	  );
	}
	
	editCompany(companyData:any) {
		return this.backend.editCompany(companyData[0]).subscribe(
			data=>this.router.navigate(['/viewcompany']),
			error=>this.handleError(error)
		);
	}

	handleError(error:any) {
		this.error = error.error;
	}

}
