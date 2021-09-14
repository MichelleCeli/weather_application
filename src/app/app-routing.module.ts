import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

const routes: Routes = [
  {path: 'weather-city/:name', component: WeatherDetailsComponent},
  {path: 'start', component: StartComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
