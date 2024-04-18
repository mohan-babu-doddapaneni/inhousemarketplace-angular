
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from '../offer' 
import { OfferService } from '../offer.service';
@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  offers: Offer[];

  constructor(private offerService: OfferService, private router: Router ) { }

  ngOnInit(): void {
    this.getOffers();
   
  }
  private getOffers(){
    this.offerService.getOfferList().subscribe(data => {
      this.offers = data;
    });
  }
  
  getOffer(resId: number){
    this.router.navigate(['get-offer', resId]);
  }
  updateOffer(){
    this.router.navigate(['update-offer']);
  }

  deleteOffer(resId: number){
    this.offerService.deleteOffer(resId).subscribe( data =>
      {
      console.debug(data);
      this.getOffers();
    })

  }
  
  gotolist(){
    this.router.navigate(['/offermodule']);  
  }

}
