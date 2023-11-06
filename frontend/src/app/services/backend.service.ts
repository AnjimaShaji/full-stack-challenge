import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }
  signup(data:any) {
  	return this.http.post('http://127.0.0.1:8000/api/signup',data);
  }
  login(data:any) {
  	return this.http.post('http://127.0.0.1:8000/api/login',data);
  }
  createCompany(data:any) {
  	return this.http.post('http://127.0.0.1:8000/api/create-company',data);
  }
  editCompany(data:any) {
  	return this.http.post('http://127.0.0.1:8000/api/update-company',data);
  }
  delCompany(data:any) {
  	return this.http.post('http://127.0.0.1:8000/api/del-company',data);
  }
  createJob(data:any) {
  	return this.http.post('http://127.0.0.1:8000/api/create-job',data);
  }
  getCompany() {
  	return this.http.get('http://127.0.0.1:8000/api/view-companies');
  }
  viewJob() {
    return this.http.get('http://127.0.0.1:8000/api/view-job');
  }
  searchJob(data:any) {
    return this.http.get('http://127.0.0.1:8000/api/search-job',data);
  }
  getJob(data:any) {
    return this.http.get('http://127.0.0.1:8000/api/view-single-job',data);
  }
  updateJob(data:any) {
    return this.http.post('http://127.0.0.1:8000/api/update-job',data);
  }

}
