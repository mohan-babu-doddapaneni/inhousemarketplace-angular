import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';
 
@Component({
  selector: 'app-update-proposal',
  templateUrl: './update-proposal.component.html',
  styleUrls: ['./update-proposal.component.css']
})
export class UpdateProposalComponent implements OnInit {
  propId: number;
proposal: Proposal=new Proposal();
  constructor(private proposalService: ProposalService,private route: ActivatedRoute,
    private router: Router) { }
 
  ngOnInit(): void {
    this.propId = this.route.snapshot.params['propId'];

    this.proposalService.getProposalById(this.propId).subscribe(data => {
      this.proposal = data;
    }, error => console.log(error));
  }
  updateProposal()
  {
    this.proposalService.updateProposal(this.proposal).subscribe( data =>{
      console.log(data);
      this.goToProposalList();
    },
    error => console.log(error));
  }
  onSubmit(){
    console.log(this.proposal);
    this.updateProposal();
  }
  goToProposalList(){
    this.router.navigate(['/proposalmodule']);
  }
  gotolist(){
    this.router.navigate(['/proposalmodule']);  
  }
}