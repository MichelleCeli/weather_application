import { Component, OnInit } from '@angular/core';
import { City } from '../City';
import { CITIES } from '../mock-cities';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor() { }

  cities = CITIES;

 selectedCity! : City;

  getWeather(city: City): void {
    this.selectedCity = city;
  } 

  
  ngOnInit(): void {
  }

}
