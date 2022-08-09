import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  public URL=environment.letsTalkURI || "http://localhost:3000"

  constructor(private http:HttpClient) { }

  public getCityByStateName(stateName:string){
    return this.http.get(`${this.URL}/public/cities/${stateName}`);
  }
}
