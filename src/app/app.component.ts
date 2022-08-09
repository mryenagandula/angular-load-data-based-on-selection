import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityService } from './apis/city.service';
import { CountryService } from './apis/country.service';
import { StateService } from './apis/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form:FormGroup;
  public countries=[];
  public cities=[];
  public states=[];

  constructor(private fb:FormBuilder,
    private countryService:CountryService,
    private stateService:StateService,
    private cityService:CityService
    ) { 
    this.formInit();
  }

  public ngOnInit():void {
    this.getAllCountries();
  }

  private formInit(){
    this.form = this.fb.group({
      country: ['',[Validators.required]],
      state: ['',[Validators.required]],
      city: ['',[Validators.required]]
    });
  }

  public getAllCountries(){
    this.countryService.getAllCountries().subscribe((res:any)=>{
      this.countries = res.countries && res.countries.length > 0 ? res.countries : []
    },error=>{
      console.log(error)
    })
  }

  public getStateByCountryId(){
    this.states=[];
    this.cities=[];
    this.form.get('state').reset();
    this.form.get('city').reset();
    const country= this.form.get('country').value;
    this.stateService.getStateByCountryId(country._id).subscribe((res:any)=>{
      this.states = res.states && res.states.length > 0 ? res.states : []
    },error=>{
      console.log(error)
    })
  }

  public getCitiesByStateName(){
    this.cities=[];
    this.form.get('city').reset();
    const state= this.form.get('state').value;
    this.cityService.getCityByStateName(state.state).subscribe((res:any)=>{
      this.cities = res.cities && res.cities.length > 0 ? res.cities : []
    },error=>{
      console.log(error)
    })
  }
}
