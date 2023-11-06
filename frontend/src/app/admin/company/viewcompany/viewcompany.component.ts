import { Component } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewcompany',
  templateUrl: './viewcompany.component.html',
  styleUrls: ['./viewcompany.component.css']
})
export class ViewcompanyComponent {

	constructor(private backend:BackendService, private httpClient: HttpClient) { }
	showNavbar: boolean = true;
	companies:any = [];
	ngOnInit(): void {
		this.viewCompany();
	}
	
	viewCompany() {
	  this.httpClient.get<any>('http://127.0.0.1:8000/api/view-companies').subscribe(
	    response => {

	      this.companies = response;
	      console.log(this.companies);
	    }
	  );
	}

}
