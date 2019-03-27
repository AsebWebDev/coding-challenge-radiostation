import { Component, OnInit } from '@angular/core';
import { StationsService } from '../stations.service';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss']
})
export class RadiosComponent implements OnInit {

  stations: any = null;
  selectedStation = null;

  constructor(private stationsService: StationsService) { }

  getStations() {
    this.stationsService.getStations().subscribe((data: {}) => {
      console.log(data);
      this.stations = data;
    });
  }

  onClick(station): void {
    (this.selectedStation === station)
    ? this.selectedStation = null
    : this.selectedStation = station;
  }

  ngOnInit() {
    this.getStations();
  }

}
