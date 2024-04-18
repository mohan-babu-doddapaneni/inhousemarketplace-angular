import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../offer';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {
 
  resId:number;
  offer: Offer = new Offer();
  constructor(private offerService: OfferService,
   private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.resId = this.route.snapshot.params['resId'];
    
    this.offerService.getOfferById(this.resId).subscribe(data => {
      this.offer =data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.offerService.updateOffer(this.offer).subscribe(data => {
     this.goToOfferList();
    }, error => console.log(error));
  }
  
  goToOfferList(){
    this.router.navigate(['/offermodule']);

   }
   gotolist(){
    this.router.navigate(['/offermodule']);  
  }
}
