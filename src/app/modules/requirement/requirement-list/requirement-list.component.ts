import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requirement-list',
  templateUrl: './requirement-list.component.html',
  styleUrls: ['./requirement-list.component.css']
})
export class RequirementListComponent implements OnInit {

  requirements: Requirement[];

  constructor(private requirementService: RequirementService, private router: Router ) { }

  ngOnInit(): void {
    this.getRequirements();
   
  }
  private getRequirements(){
    this.requirementService.getRequirementList().subscribe(data => {
      this.requirements = data;
    });
  }
  
  getRequirement(resId: number){
    this.router.navigate(['get-requirement', resId]);
  }
  updateRequirement(){
    this.router.navigate(['update-requirement']);
  }

  deleteRequirement(resId: number){
    this.requirementService.deleteRequirement(resId).subscribe( data =>
      {
      console.debug(data);
      this.getRequirements();
    })

  }
  
  gotolist(){
    this.router.navigate(['/requirementmodule']);  
  }

}
