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
     /* this.getCity();  */
     this.getWeatherData(this.getCity() );
  }

   getCity(): string {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.weatherService.getCity(id)
      .subscribe(city => this.city = city);

      console.log(this.city);

      return this.city!.name;
    
  } 

  goBack(): void {
    this.location.back();
  }

  getWeatherData(city: string){
    this.weatherService.getData(city).subscribe((weatherData: any)=>{
        this.weatherData = weatherData.main.temp;  
        console.log(this.weatherData);
    
   })
 }

  

}
