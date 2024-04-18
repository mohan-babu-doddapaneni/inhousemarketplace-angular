import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';
 
@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  proposals: Proposal[];
 
  constructor(private proposalService: ProposalService,private router: Router) { }
 
  ngOnInit(): void {
    this.getProposals();
  }
  private getProposals()
  {
    this.proposalService.getProposalsList().subscribe(data =>{
      this.proposals = data;
    });
  }
  updateProposal(propId: number)
  {
    this.router.navigate(['update-proposal', propId]);
  }
  getProposal(propId: number){
    this.router.navigate(['get-proposal', propId]);
  }
  deleteProposal(propId: number){
    this.proposalService.deleteProposal(propId).subscribe( data => {
      console.debug(data);
      this.getProposals();
    })
  }
  gotolist(){
    this.router.navigate(['/proposalmodule']);  
  }
 
}