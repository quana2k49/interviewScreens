import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  accessKey = '9affbb097839753d26cd9ee5a5ea0783'

  constructor(private http: HttpClient) { }

  getWeather(params): Observable<any> {
    return this.http.get<any>("http://api.weatherstack.com/current?access_key=" 
    + this.accessKey + "&query=" + params, {});
  }
}
