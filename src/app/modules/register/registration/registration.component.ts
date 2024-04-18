import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

employee = new Employee();
msg='';
  constructor(private _service : RegistrationService, private _router :Router) { }

  ngOnInit():void {
  }
registerUser(){
  this._service.registerUserFromRemote(this.employee).subscribe(
    data =>{
  
   console.log("response received");
   this._router.navigate(['/register'])
   this.msg="Registered Successfully";
    },
    error => {
      console.log("exception occured");
    this.msg=error.error;
    }
  )
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
      gotolist(){
        this._router.navigate(['']);  
      }
}
