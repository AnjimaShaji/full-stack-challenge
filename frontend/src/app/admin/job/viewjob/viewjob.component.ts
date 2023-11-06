import { Component } from '@angular/core';
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['./viewjob.component.css']
})
export class ViewjobComponent {

	showNavbar: boolean = true;
	type: string = '';
    salary: number = 0;
    company: number = 0;
    location: string = '';
    jobs: any[] = [];
    companies: any[] = [];

	constructor(private backend:BackendService) { }
	ngOnInit(): void {
		this.viewJob();
		this.viewCompany();
	}
	
	viewJob() {
	  this.backend.viewJob().subscribe(
	    (response:any) => {
	      this.jobs = response;
	    }
	  );
	}

	viewCompany(){
	  this.backend.getCompany().subscribe(
	    (response:any) => {
	      this.companies = response;
	    }
	  );
	}

	filterJobs() {
        const filters = {
            type: this.type,
            salary: this.salary,
            company: this.company,
            location: this.location
        };
        this.backend.searchJob({ params: filters }).subscribe(
		    (response:any) => {
		      this.jobs = response;
		    }
		);
    }

    resetFilter() {
	    this.type = '';
	    this.salary = 0;
	    this.company = 0;
	    this.location = '';
	    this.filterJobs(); 
  	}
}
