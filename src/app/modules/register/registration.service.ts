import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../login/user';
import { Employee } from './employee';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(employee :Employee):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",employee)
  }
  public registerUserFromRemote(employee :Employee):Observable<any>{
    return this._http.post<any>("http://localhost:8080/register",employee)
  }
  public getEmployeeById(empId: number): Observable<Employee>{
    return this._http.get<Employee>("http://localhost:8080/findEmployeeById/"+empId);
  }
  private base2URL="http://localhost:8080/update";
    updateEmployee(employee: Employee): Observable<Object>{
      return this._http.put(`${this.base2URL}`, employee);
    }
}
