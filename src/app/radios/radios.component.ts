import { Component, OnInit } from '@angular/core';
import { StationsService } from '../stations.service';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss']
})
export class RadiosComponent implements OnInit {

  stations:any = {}

  constructor(private stationsService: StationsService) { }

  getStations() {
    this.stations = [];
    this.stationsService.getStations().subscribe((data: {}) => {
      console.log(data);
      this.stations = data;
    });
  }

  ngOnInit() {
    this.getStations();
  }

}
