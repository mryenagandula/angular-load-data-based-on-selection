import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public URL=environment.letsTalkURI || "http://localhost:3000"

  constructor(private http:HttpClient) { }

  public getStateByCountryId(countryId:string | number){
    return this.http.get(`${this.URL}/public/states/${countryId}`);
  }
}
