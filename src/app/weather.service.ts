import { Injectable } from '@angular/core';
import { City } from './City';
import { CITIES } from './mock-cities';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  /* getCities(): City[] {
    return CITIES;
  } */

  getCities(): Observable<City[]> {
    const cities = of(CITIES);
    return cities;
  }

  getCity(name: string): City {
   
    const city = CITIES.find(c => c.name === name)!;
   
    return city;
    /* return of(city); */
  }

  constructor() { }
}
