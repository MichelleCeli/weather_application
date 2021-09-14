import { Component, OnInit } from '@angular/core';
import { City } from '../City';
import { CITIES } from '../mock-cities';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

 /*  cities = CITIES; */

  cities: City[] = [];

 selectedCity! : City;

getCities(): void {
 /*  this.cities = this.weatherService.getCities(); */

  this.weatherService.getCities()
      .subscribe(cities => this.cities = cities);
}


  getWeather(city: City): void {
    this.selectedCity = city;
    console.log(this.selectedCity.name);
  } 

  
  ngOnInit(): void {
    this.getCities();
  }

}
