import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '../offer';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-get-offer',
  templateUrl: './get-offer.component.html',
  styleUrls: ['./get-offer.component.css']
})
export class GetOfferComponent implements OnInit {

  resId: number
  offer: Offer
  constructor(private route: ActivatedRoute, private offerService: OfferService) { }

  ngOnInit(): void {
    
    this.resId = this.route.snapshot.params['resId'];
    this.offer = new Offer();
    this.offerService.getOfferById(this.resId).subscribe( data => {
      this.offer= data;
    });
  }

}
