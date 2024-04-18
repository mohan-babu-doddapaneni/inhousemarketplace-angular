import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceserviceService {
  constructor(private httpClient:HttpClient) { }
  getResourceByEmpId(empId:number):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/resource/}"+empId);
  }
  getResourceByCatTyp(category: String, type: String):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/resource?}"+category+"&}"+type);
  }
}
