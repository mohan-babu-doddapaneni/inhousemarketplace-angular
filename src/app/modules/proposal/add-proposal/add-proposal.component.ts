import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';
 
@Component({
  selector: 'app-add-proposal',
  templateUrl: './add-proposal.component.html',
  styleUrls: ['./add-proposal.component.css']
})
export class AddProposalComponent implements OnInit {
  proposal: Proposal=new Proposal();
 
  constructor(private proposalService: ProposalService,
    private router: Router) { }
 
  ngOnInit(): void {
  }
 
  saveProposal(){
    this.proposalService.addProposal(this.proposal).subscribe( data =>{
      console.log(data);
      this.goToProposalList();
    },
    error => console.log(error));
  }
  goToProposalList()
  {
    this.router.navigate(['/proposalmodule']);
  }
  onSubmit(){
    console.log(this.proposal);
    this.saveProposal();
 
  }
  gotolist(){
    this.router.navigate(['/proposalmodule']);  
  }
 
}