import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resource } from '../resource';
import { ResourceserviceService } from '../resourceservice.service';

@Component({
  selector: 'app-byempid',
  templateUrl: './byempid.component.html',
  styleUrls: ['./byempid.component.css']
})
export class ByempidComponent implements OnInit {

  resource = new Resource()
  constructor(private route:Router,private resourceserviceService:ResourceserviceService) { }
  resources: Resource[];
  ngOnInit(): void {
    //this.getResources();
  }
  gotolist(){
    this.route.navigate(['/resourcemodule']);  
  }
}
