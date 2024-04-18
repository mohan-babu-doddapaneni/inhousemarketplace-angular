import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from '../../offer/offer';
import { OfferService } from '../../offer/offer.service';

@Component({
  selector: 'app-offerresourcelist',
  templateUrl: './offerresourcelist.component.html',
  styleUrls: ['./offerresourcelist.component.css']
})
export class OfferresourcelistComponent implements OnInit {
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
