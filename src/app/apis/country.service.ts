import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  public URL=environment.letsTalkURI || "http://localhost:3000"

  constructor(private http:HttpClient) { }

  public getAllCountries(){
    return this.http.get(`${this.URL}/public/countries`);
  }
}
