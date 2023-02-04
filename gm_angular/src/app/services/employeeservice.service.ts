import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private baseUrl='http://localhost:8080/api';

  constructor(private http:HttpClient) { }


  createSG(emp:Employee){
    return this.http.post(this.baseUrl+"/saveemp",emp);
  }

}
