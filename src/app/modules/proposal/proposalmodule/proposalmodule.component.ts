import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-proposalmodule',
  templateUrl: './proposalmodule.component.html',
  styleUrls: ['./proposalmodule.component.css']
})
export class ProposalmoduleComponent implements OnInit {
  proposals: Proposal[];
  constructor(private router: Router,private proposalService: ProposalService) { }

  ngOnInit(): void {
    this.getProposals();
  }
  private getProposals()
  {
    this.proposalService.getProposalsList().subscribe(data =>{
      this.proposals = data;
    });
  }
  gotolist(){
    this.router.navigate(['/home']);  
  }
}
