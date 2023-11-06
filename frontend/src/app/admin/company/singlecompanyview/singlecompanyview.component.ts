import { Component, NgModule } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import {  HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlecompanyview',
  templateUrl: './singlecompanyview.component.html',
  styleUrls: ['./singlecompanyview.component.css']
})
export class SinglecompanyviewComponent {

	constructor(private backend:BackendService, private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }
	userid:any = [];
	companyInfo:any = [];
	showNavbar: boolean = true;
	public error:any = [];
	public form = {
		name:null,
		email:null,
		location:null,
		industry:null		
	}
	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
		  this.userid = params['id']
		}); 
		this.companyDetails()
	}
	

	companyDetails() {
	  this.httpClient.get<any>(`http://127.0.0.1:8000/api/company-details/${this.userid}`).subscribe(
	    response => {
	      this.companyInfo = response.companyDetails as string[];
	      console.log(this.companyInfo);
	    }
	  );
	}

	handleError(error:any) {
		this.error = error.error;
	}

}
