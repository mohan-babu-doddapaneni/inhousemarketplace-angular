import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from '../../offer/offer';
import { OfferService } from '../../offer/offer.service';
import { Resource } from '../resource';

@Component({
  selector: 'app-resourcemodule',
  templateUrl: './resourcemodule.component.html',
  styleUrls: ['./resourcemodule.component.css']
})
export class ResourcemoduleComponent implements OnInit {

  resource = new Resource();
  offers: Offer[];
  constructor(private offerService: OfferService, private router: Router) { }

  ngOnInit(): void {
    this.getOffers();
   
  }
  private getOffers(){
    this.offerService.getOfferList().subscribe(data => {
      this.offers = data;
    });
  }  
  gotolist(){
    this.router.navigate(['/resourcemodule']);  
  }
}