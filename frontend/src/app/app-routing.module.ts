import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CreatecompanyComponent } from './admin/createcompany/createcompany.component';
import { ViewcompanyComponent } from './admin/company/viewcompany/viewcompany.component';
import { SinglecompanyviewComponent } from './admin/company/singlecompanyview/singlecompanyview.component';
import { EditcompanyComponent } from './admin/company/editcompany/editcompany.component';
import { DelcompanyComponent } from './admin/company/delcompany/delcompany.component';
import { CreatejobComponent } from './admin/job/createjob/createjob.component';
import { ViewjobComponent } from './admin/job/viewjob/viewjob.component';
import { ViewsinglejobComponent } from './admin/job/viewsinglejob/viewsinglejob.component';
import { EditjobComponent } from './admin/job/editjob/editjob.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'signup',
		component:SignupComponent
	},
    {	
    	path:'createcompany',
    	component:CreatecompanyComponent
    },
    {	
    	path:'viewcompany',
    	component:ViewcompanyComponent
    },
    {	
    	path:'single-company-view/:id',
    	component:SinglecompanyviewComponent
    },
    {	
    	path:'edit-company/:id',
    	component:EditcompanyComponent
    },
    {	
    	path:'del-company/:id',
    	component:DelcompanyComponent
    },
    {	
    	path:'create-job',
    	component:CreatejobComponent
    },
    {    
        path:'view-job',
        component:ViewjobComponent
    },
    {    
        path:'view-single-job/:id',
        component:ViewsinglejobComponent
    },
    {    
        path:'edit-job/:id',
        component:EditjobComponent
    },
    {    
        path:'',
        component:HomeComponent
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
