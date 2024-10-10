import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

  city: string = 'Jabalpur';
  weatherData: any = null;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeatherByCity(this.city).subscribe(
      data => {
        this.weatherData = data;
      },
      error => {
        console.error('Error fetching weather data', error);
      }
    )
  }

  updateCity(city: string) {
    this.city = city;
    this.getWeather();
  }

}
