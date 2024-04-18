import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { LoginComponent } from './modules/login/login/login.component';
import { AddOfferComponent } from './modules/offer/add-offer/add-offer.component';
import { GetOfferComponent } from './modules/offer/get-offer/get-offer.component';
import { OfferListComponent } from './modules/offer/offer-list/offer-list.component';
import { OffermoduleComponent } from './modules/offer/offermodule/offermodule.component';
import { UpdateOfferComponent } from './modules/offer/update-offer/update-offer.component';
import { AddProposalComponent } from './modules/proposal/add-proposal/add-proposal.component';
import { GetProposalComponent } from './modules/proposal/get-proposal/get-proposal.component';
import { ProposalListComponent } from './modules/proposal/proposal-list/proposal-list.component';
import { ProposalmoduleComponent } from './modules/proposal/proposalmodule/proposalmodule.component';
import { UpdateProposalComponent } from './modules/proposal/update-proposal/update-proposal.component';
import { EditemployeeComponent } from './modules/register/editemployee/editemployee.component';
import { RegistrationComponent } from './modules/register/registration/registration.component';
import { AddRequirementComponent } from './modules/requirement/add-requirement/add-requirement.component';
import { GetRequirementComponent } from './modules/requirement/get-requirement/get-requirement.component';
import { RequirementListComponent } from './modules/requirement/requirement-list/requirement-list.component';
import { RequirementmoduleComponent } from './modules/requirement/requirementmodule/requirementmodule.component';
import { UpdateRequirementComponent } from './modules/requirement/update-requirement/update-requirement.component';
import { ByempidComponent } from './modules/resource/byempid/byempid.component';
import { CatandtypComponent } from './modules/resource/catandtyp/catandtyp.component';
import { OfferresourcelistComponent } from './modules/resource/offerresourcelist/offerresourcelist.component';
//import { RequirementresourcelistComponent } from './modules/resource/requirementresourcelist/requirementresourcelist.component';
import { ResourcemoduleComponent } from './modules/resource/resourcemodule/resourcemodule.component';

const routes: Routes = [
  {path:'' ,component:LoginComponent},
  {path:'home' ,component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path: 'proposals', component: ProposalListComponent},
  {path: 'proposalmodule', component: ProposalmoduleComponent},
  {path: 'add-proposal', component:AddProposalComponent},
  {path: '', redirectTo: 'proposals', pathMatch: 'full'},
  {path: 'update-proposal/:propId', component:UpdateProposalComponent},
  {path: 'get-proposal/:propId', component:GetProposalComponent},
  {path: 'offermodule', component: OffermoduleComponent},
  {path:'offers', component: OfferListComponent},
  {path:'add-offer', component: AddOfferComponent},
  {path:'update-offer', component: UpdateOfferComponent},
  {path: 'get-offer/:id', component: GetOfferComponent},
  {path:'', redirectTo: 'offers', pathMatch:'full'},
  {path:'resourcemodule',component:ResourcemoduleComponent},
  {path:'byempid',component:ByempidComponent},
  {path:'catandtyp',component:CatandtypComponent},
  {path:'requirementmodule',component:RequirementmoduleComponent},
  {path: 'requirement-list', component: RequirementListComponent},
  {path: 'add-requirement', component: AddRequirementComponent},
  {path: 'update-requirement', component: UpdateRequirementComponent},
  {path: '', redirectTo: 'requirements', pathMatch: 'full'},
  {path: 'offerresourcelist', component:OfferresourcelistComponent},
  {path: 'editemployee', component:EditemployeeComponent},
  //{path: 'requirementresourcelist', component:RequirementresourcelistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[LoginComponent, RegistrationComponent, AddProposalComponent, GetProposalComponent, ProposalListComponent,
   UpdateProposalComponent,HomeComponent,GetProposalComponent, AddProposalComponent, UpdateProposalComponent, ProposalListComponent,
   AddOfferComponent, OfferListComponent, UpdateOfferComponent, OffermoduleComponent,GetOfferComponent, ProposalmoduleComponent,
   AddRequirementComponent, GetRequirementComponent, UpdateRequirementComponent,RequirementmoduleComponent,RequirementListComponent,
   ByempidComponent,CatandtypComponent,ResourcemoduleComponent,EditemployeeComponent,OfferresourcelistComponent,]