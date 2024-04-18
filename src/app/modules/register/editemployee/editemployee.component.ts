import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../login/user';
import { Employee } from '../employee';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  employee =new Employee();
  user=new User();
  empId: number;
  msg='';
  constructor(private registrationService: RegistrationService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.empId = this.route.snapshot.params['empId'];

    this.registrationService.getEmployeeById(this.empId).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }
  updateEmployee()
  {
    this.registrationService.updateEmployee(this.employee).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }
  onSubmit(){
    // console.log(this.employee);
    // this.updateEmployee();
    this.registrationService.updateEmployee(this.employee).subscribe(
      data =>{
    
        console.log(this.employee);
        this.router.navigate(['/editemployee'])
        this.msg="Updated Successfully";
         }
        //  error => {
        //    console.log("error occured");
        //  this.msg="Invalid Credentials, Please Enter Valid Details";
        //  }
    )
  }

  gotolist(){
    this.router.navigate(['/home']); 
  }
}
