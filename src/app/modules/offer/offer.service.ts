import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from './offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private baseURL = "http://localhost:8080/getalloffers";
  constructor(private httpClient: HttpClient) { }

  getOfferList(): Observable<Offer[]>{
    return this.httpClient.get<Offer[]>(`${this.baseURL}`);
  }

  private baseURL1="http://localhost:8080/addoffer";
  addOffer(offer: Offer): Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`, offer);
  }
  
 //private baseURL3="http://localhost:8585/getoffer/{resId}";
  getOfferById(resId:number): Observable<Offer>{
    return this.httpClient.get<Offer>("http://localhost:8080/getoffer/"+resId);
  }

  private baseURL2="http://localhost:8080/updateoffer";
  updateOffer(offer: Offer): Observable<any>{
    return this.httpClient.put(`${this.baseURL2}`, offer);
  }

  //private baseURL4="http://localhost:8585/deleteoffer/{resId}";
  deleteOffer(resId: number): Observable<Offer>{
    return this.httpClient.delete<Offer>("http://localhost:8080/deleteoffer/"+resId);
  }
}
