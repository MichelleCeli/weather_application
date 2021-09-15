import { Component, OnInit, Input } from '@angular/core';
import { City } from '../City';
import { ActivatedRoute } from '@angular/router';
import { Location, LocationChangeListener } from '@angular/common';
import { WeatherService } from '../weather.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

import { map } from 'rxjs/operators';

import { WeatherData } from '../WeatherData';

import { Weather } from 'src/Weather';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  city: City | undefined;

   data=[];
   weatherData=[];
  /* weatherData:any; */


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private weatherService: WeatherService
  ) {
     
  }

  ngOnInit(): void {
     this.getCity(); 
     this.getWeatherData();
    /*  this.weatherData = this.weatherService.getData().subscribe(data=>{console.warn(data)})
     console.log("value?: " + this.weatherData.coord); */
  }

   getCity(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.weatherService.getCity(id)
      .subscribe(city => this.city = city);
    
  } 

  goBack(): void {
    this.location.back();
  }

  getWeatherData(){
    this.weatherService.getData().subscribe((weatherData: any)=>{
        this.weatherData = weatherData.main.temp;  
        console.log(this.weatherData);
    
   })
 }

  

}
