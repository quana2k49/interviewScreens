import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../shared/services/weather.service'
import { debounce } from 'lodash';

@Component({
  selector: 'app-weatherstack',
  templateUrl: './weatherstack.component.html',
  styleUrls: ['./weatherstack.component.css']
})
export class WeatherstackComponent implements OnInit {
  data: any = {}
  constructor(private _service: WeatherService) {
    this._search = debounce(this._search, 500)
  }
  logo = 'https://weatherstack.com/site_images/weatherstack_logo_footer.png'
  ngOnInit() {
    this._getWeather()
  }

  _getWeather() {
    this._service.getWeather('Ha Noi').subscribe(res => {
      this.data = res
    })
  }

  _search(data) {
    this._service.getWeather(data.target.value).subscribe(res => {
      this.data = res
    })
  }
}
