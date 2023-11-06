import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CreatecompanyComponent } from './admin/createcompany/createcompany.component';
import { ViewcompanyComponent } from './admin/company/viewcompany/viewcompany.component';
import { SinglecompanyviewComponent } from './admin/company/singlecompanyview/singlecompanyview.component';
import { EditcompanyComponent } from './admin/company/editcompany/editcompany.component';
import { DelcompanyComponent } from './admin/company/delcompany/delcompany.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatejobComponent } from './admin/job/createjob/createjob.component';
import { ViewjobComponent } from './admin/job/viewjob/viewjob.component';
import { ViewsinglejobComponent } from './admin/job/viewsinglejob/viewsinglejob.component';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { EditjobComponent } from './admin/job/editjob/editjob.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    CreatecompanyComponent,
    ViewcompanyComponent,
    SinglecompanyviewComponent,
    EditcompanyComponent,
    DelcompanyComponent,
    CreatejobComponent,
    ViewjobComponent,
    ViewsinglejobComponent,
    NavbarDashboardComponent,
    EditjobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
