import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';
 
@Component({
  selector: 'app-get-proposal',
  templateUrl: './get-proposal.component.html',
  styleUrls: ['./get-proposal.component.css']
})
export class GetProposalComponent implements OnInit {
  propId: number
  proposal: Proposal
  constructor(private route: ActivatedRoute, private proposalService: ProposalService) { }
 
  ngOnInit(): void {
    this.propId = this.route.snapshot.params['propId'];
 
    this.proposal = new Proposal();
    this.proposalService.getProposalById(this.propId).subscribe( data => {
      this.proposal = data;
    });
  }
 
}