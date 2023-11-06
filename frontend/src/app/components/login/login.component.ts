import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	public form = {
		email:null,
		password:null
	}
	constructor(private backend:BackendService, private router: Router) { }
	public error:any = [];
	ngOnInit(): void {

	}
	
 	submitLogin() {
		console.log(this.form);
		return this.backend.login(this.form).subscribe(
			data=>this.router.navigate(['/viewcompany']),
			error=>this.handleError(error),
		);
	}

	handleError(error:any) {
		this.error = error.error;
	}

}
