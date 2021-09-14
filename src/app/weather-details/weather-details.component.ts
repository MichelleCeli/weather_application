import { Component, OnInit, Input } from '@angular/core';
import { City } from '../City';
import { ActivatedRoute } from '@angular/router';
import { Location, LocationChangeListener } from '@angular/common';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  city: City | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
     this.getCity(); 
  }

   getCity(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.weatherService.getCity(id)
      .subscribe(city => this.city = city);
    
  } 

  goBack(): void {
    this.location.back();
  }

}
