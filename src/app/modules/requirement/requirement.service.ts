import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirement } from './requirement';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {
  private baseURL = "http://localhost:8080/findallreqs";
  constructor(private httpClient: HttpClient) { }

  getRequirementList(): Observable<Requirement[]>{
    return this.httpClient.get<Requirement[]>(`${this.baseURL}`);
  }

  private baseURL1="http://localhost:8080/addreq";
  addRequirement(requirement: Requirement): Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`, requirement);
  }
  
 //private baseURL3="http://localhost:8585/getoffer/{resId}";
  getRequirementById(resId:number): Observable<Requirement>{
    return this.httpClient.get<Requirement>("http://localhost:8080/findreq/"+resId);
  }

  private baseURL2="http://localhost:8080/updatereq";
  updateRequirement(requirement:Requirement): Observable<any>{
    return this.httpClient.put(`${this.baseURL2}`, requirement);
  }

  //private baseURL4="http://localhost:8585/deleteoffer/{resId}";
  deleteRequirement(resId: number): Observable<Requirement>{
    return this.httpClient.delete<Requirement>("http://localhost:8080/deletereq/"+resId);
  }
}
