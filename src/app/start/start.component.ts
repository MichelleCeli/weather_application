import { Component, OnInit } from '@angular/core';
import { City } from '../City';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  cities: City[] = [];
  
  ngOnInit(): void {
    this.getCities();
  }

  getCities(): void {
    this.weatherService.getCities()
        .subscribe(cities => this.cities = cities);
  }

}
