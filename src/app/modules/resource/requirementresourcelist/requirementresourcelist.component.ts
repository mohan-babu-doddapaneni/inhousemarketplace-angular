// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Requirement } from '../../requirement/requirement';
// import { RequirementService } from '../../requirement/requirement.service';

// @Component({
//   selector: 'app-requirementresourcelist',
//   templateUrl: './requirementresourcelist.component.html',
//   styleUrls: ['./requirementresourcelist.component.css']
// })
// export class RequirementresourcelistComponent implements OnInit {
//   requirements: Requirement[];
//   constructor(private requirementService: RequirementService, private router: Router) { }

//   ngOnInit(): void {
//     this.getRequirements();
   
//   }
//   private getRequirements(){
//     this.requirementService.getRequirementList().subscribe(data => {
//       this.requirements = data;
//     });
//   }  
//   gotolist(){
//     this.router.navigate(['/resourcemodule']);  
//   }

// }
