import { Injectable } from '@angular/core';
import { City } from './City';
import { CITIES } from './mock-cities';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  getCities(): Observable<City[]> {
    const cities = of(CITIES);
    return cities;
  }

  getCity(id: number): Observable<City> {
   
    const city = CITIES.find(c => c.id === id)!;
   
     return of(city); 
  }

  constructor() { }
}
