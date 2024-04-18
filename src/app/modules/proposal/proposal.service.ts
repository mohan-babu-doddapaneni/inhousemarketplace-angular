import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proposal } from './proposal';
 
@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  private baseURL="http://localhost:8080/pro/getallProposals";
 
  constructor(private httpClient: HttpClient) { }
 
  getProposalsList(): Observable<Proposal[]>{
    return this.httpClient.get<Proposal[]>(`${this.baseURL}`);
    }
  private base1URL="http://localhost:8080/addProposal";
 
    addProposal(proposal: Proposal): Observable<Object>{
      return this.httpClient.post(`${this.base1URL}`, proposal);
    }  
 
    private base2URL="http://localhost:8080/updateProposal";
    updateProposal(proposal: Proposal): Observable<Object>{
      return this.httpClient.put(`${this.base2URL}`, proposal);
    }
 
    //private base3URL="http://localhost:8085/pro//proposalbyid/{propId}";
    getProposalById(propId: number): Observable<Proposal>{
      return this.httpClient.get<Proposal>("http://localhost:8080/proposalbyid/"+propId);
    }
    //private base4URL="http://localhost:8085/pro/delete/{propId}";
    deleteProposal(propId: number): Observable<Proposal>{
      return this.httpClient.delete<Proposal>("http://localhost:8080/delete/"+propId);
    }
  }