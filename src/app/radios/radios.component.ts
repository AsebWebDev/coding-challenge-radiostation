import { Component, OnInit } from '@angular/core';
import { StationsService } from '../stations.service';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss']
})
export class RadiosComponent implements OnInit {

  stations:any = {};
  selectedStation = null;

  constructor(private stationsService: StationsService) { }

  getStations() {
    this.stations = [];
    this.stationsService.getStations().subscribe((data: {}) => {
      console.log(data);
      this.stations = data;
    });
  }

  onClick(station): void {
    if (this.selectedStation === station) this.selectedStation = null
    else this.selectedStation = station;
  }

  ngOnInit() {
    this.getStations();
  }

}
