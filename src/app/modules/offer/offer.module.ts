import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffermoduleComponent } from './offermodule/offermodule.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { GetOfferComponent } from './get-offer/get-offer.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AddOfferComponent, GetOfferComponent,OfferListComponent,UpdateOfferComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    OffermoduleComponent
  ]
})
export class OfferModule { }
