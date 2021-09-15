import { Component, OnInit, Input } from '@angular/core';
import { City } from '../City';
import { ActivatedRoute } from '@angular/router';
import { Location, LocationChangeListener, NgIf } from '@angular/common';
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

  cityTemp: number = 5;
  cityDescr: string = "";


   data=[];
   weatherData: any[]=[];
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private weatherService: WeatherService
  ) {
     
  }

  ngOnInit(): void {
     this.getWeatherData(this.getCity() );
  }

   getCity(): City {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.weatherService.getCity(id)
      .subscribe(city => this.city = city);

      console.log(this.city);

      return this.city!;
    
  } 

  goBack(): void {
    this.location.back();
  }

  getWeatherData(city: City){
    this.weatherService.getData(city.name).subscribe((weatherData: any)=>{
        this.cityTemp = weatherData.main.temp - 273.15;
        this.cityTemp = Math.round((this.cityTemp + Number.EPSILON) * 100) / 100

    
   })
 }

  

}
