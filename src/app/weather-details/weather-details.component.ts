import { Component, OnInit, Input } from '@angular/core';
import { City } from '../City';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  @Input() city?: City;

  constructor() { }

  ngOnInit(): void {
  }

}
