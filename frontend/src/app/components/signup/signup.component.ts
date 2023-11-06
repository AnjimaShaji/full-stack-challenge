import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
	public form = {
		name:null,
		email:null,
		password:null,
		password_confirmation:null
	}
	constructor(private backend:BackendService, private router: Router) { }
	public error:any = [];
	ngOnInit(): void {
	}
	
 	submitSignup() {
		//console.log(this.form);
		return this.backend.signup(this.form).subscribe(
			data=>this.router.navigate(['/login']),
			error=>this.handleError(error)
		);
	}

	handleError(error:any) {
		this.error = error.error;
	}
}
