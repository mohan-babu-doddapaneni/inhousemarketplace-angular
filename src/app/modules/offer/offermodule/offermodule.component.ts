import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../offer';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offermodule',
  templateUrl: './offermodule.component.html',
  styleUrls: ['./offermodule.component.css']
})
export class OffermoduleComponent implements OnInit {
  offers: Offer[];
  constructor(private router:Router, private route: ActivatedRoute,private offerService: OfferService ) { }

  ngOnInit(): void {
    this.getOffers();
   
  }
  private getOffers(){
    this.offerService.getOfferList().subscribe(data => {
      this.offers = data;
    });
  }
  gotolist(){
    this.router.navigate(['/home']);  
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
}
