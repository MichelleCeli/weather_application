import { Injectable } from '@angular/core';
import { City } from './City';
import { CITIES } from './mock-cities';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http'; 
import { WeatherData } from './WeatherData';

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

 
  getData(city: string): Observable<WeatherData[]>
  {
   /*  let weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + 'Amsterdam' + '&appid=9a37335f66eb41615baaf5c92ee3ba90'; */
    let weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=9a37335f66eb41615baaf5c92ee3ba90';
    return this.http.get<WeatherData[]>(weatherUrl);
  }
}
