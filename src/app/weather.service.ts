import { Injectable } from '@angular/core';
import { City } from './City';
import { CITIES } from './mock-cities';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http'; 

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

  constructor(private http:HttpClient) { }

  private weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=9a37335f66eb41615baaf5c92ee3ba90';
  getData()
  {
    return this.http.get(this.weatherUrl);
  }
}
