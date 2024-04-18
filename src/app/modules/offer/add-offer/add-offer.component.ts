import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from '../offer';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  offer: Offer =new Offer();
  constructor(private offerService: OfferService, private router: Router) { }

  ngOnInit(): void {
  }
    
  saveOffer(){
    this.offerService.addOffer(this.offer).subscribe(data =>{
      console.log(data);
      this.goToOfferList();
    },
    error => console.log(error));
  }

  goToOfferList(){
   this.router.navigate(['/offermodule']);
  }
  onSubmit(){
    console.log(this.offer);
    this.saveOffer();
  }
  gotolist(){
    this.router.navigate(['/offermodule']);  
  }
}
