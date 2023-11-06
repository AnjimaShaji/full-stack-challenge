import { BackendService } from '../../services/backend.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})
export class CreatecompanyComponent {
	public form = {
		name:null,
		email:null,
		location:null,
		industry:null		
	}
	constructor(private backend:BackendService, private router: Router) { }
	public error:any = [];
	ngOnInit(): void {
	}
	
 	createCompany() {
		return this.backend.createCompany(this.form).subscribe(
			data=>this.router.navigate(['/viewcompany']),
			error=>this.handleError(error),
		);
	}

	handleError(error:any) {
		this.error = error.error;
	}

}
