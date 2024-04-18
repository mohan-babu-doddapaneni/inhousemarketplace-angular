import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resource } from '../resource';
import { ResourceserviceService } from '../resourceservice.service';

@Component({
  selector: 'app-catandtyp',
  templateUrl: './catandtyp.component.html',
  styleUrls: ['./catandtyp.component.css']
})
export class CatandtypComponent implements OnInit {
  resource = new Resource();
  constructor(private route:Router, private resourceserviceService:ResourceserviceService) { }
  resources: Resource[];
  ngOnInit(): void {
  }
  gotolist(){
    this.route.navigate(['/resourcemodule']);  
  }

}
