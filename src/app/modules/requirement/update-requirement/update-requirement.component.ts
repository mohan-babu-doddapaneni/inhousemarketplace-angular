import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';
 
@Component({
  selector: 'app-update-requirement',
  templateUrl: './update-requirement.component.html',
  styleUrls: ['./update-requirement.component.css']
})
export class UpdateRequirementComponent implements OnInit {
 
  resId:number;
  requirement: Requirement = new Requirement();
  constructor(private requirementService: RequirementService,
   private route: ActivatedRoute, private router: Router) { }
 
  ngOnInit(): void {
 
    this.resId = this.route.snapshot.params['resId'];
    this.requirementService.getRequirementById(this.resId).subscribe(data => {
      this.requirement =data;
    }, error => console.log(error));
  }
 
  onSubmit(){
    this.requirementService.updateRequirement(this.requirement).subscribe(data => {
     this.goToRequirementList();
    }, error => console.log(error));
  }
  
  goToRequirementList(){
    this.router.navigate(['/requirementmodule']);
 
   }
   gotolist(){
    this.router.navigate(['/requirementmodule']);  
  }
}