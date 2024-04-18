import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../register/employee';
import { RegistrationService } from '../../register/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee=new Employee();
  msg='';
    constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this._service.loginUserFromRemote(this.employee).subscribe(
      data =>{
    
     console.log("response received");
     this._router.navigate(['/home'])
      },
      error => {
        console.log("error occured");
      this.msg="Invalid Credentials, Please Enter Valid Details";
      }
    )
      }
    
      gotoregistration(){
        this._router.navigate(['/registration'])
      }
    
}
