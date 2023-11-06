import { Component } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { Router, ActivatedRoute } from '@angular/router';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewsinglejob',
  templateUrl: './viewsinglejob.component.html',
  styleUrls: ['./viewsinglejob.component.css']
})
export class ViewsinglejobComponent {

	constructor(private backend:BackendService, private activatedRoute: ActivatedRoute, private httpClient: HttpClient,private router: Router) { }
	userid:any = [];
	jobInfo:any = [];	
	showNavbar: boolean = true;
	public error:any = [];
	form = {
		name:null,
		email:null,
		location:null,
		industry:null		
	}
	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
		  this.userid = params['id']
		}); 
		this.viwSingleJob()
	}
	
	viwSingleJob() {
	  this.httpClient.get<any>(`http://127.0.0.1:8000/api/view-single-job/${this.userid}`).subscribe(
	    response => {
	      this.jobInfo = response.jobDetails as string[];
	      console.log(this.jobInfo);
	    }
	  );
	}

	handleError(error:any) {
		this.error = error.error;
	}

}
