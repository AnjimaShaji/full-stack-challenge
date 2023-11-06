import { Component, Input } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { Router, ActivatedRoute } from '@angular/router';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editjob',
  templateUrl: './editjob.component.html',
  styleUrls: ['./editjob.component.css']
})
export class EditjobComponent {

	constructor(private backend:BackendService, private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }
	showNavbar: boolean = true;
	userid:any = [];
	jobInfo:any = [];
	companyId: number = 0;
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
		this.jobDetails();
	}

	jobDetails(){

	  this.httpClient.get<any>(`http://127.0.0.1:8000/api/view-single-job/${this.userid}`).subscribe(
	    response => {
	      this.jobInfo = response.companyDetails as string[];
	      console.log(this.jobInfo);
	    }
	  );
	}

	onSelected(value:number) {
		this.companyId = this.jobInfo.company_id;
	}
	
	editJob(jobData:any) {
		return this.backend.updateJob(jobData[0]).subscribe(
			data=>this.router.navigate(['/view-job']),
			error=>this.handleError(error)
		);
	}

	handleError(error:any) {
		this.error = error.error;
	}

}
