import { Component, OnInit, Input } from '@angular/core';
import { StationsService } from '../stations.service';

@Component({
  selector: 'app-radio-list-item',
  templateUrl: './radio-list-item.component.html',
  styleUrls: ['./radio-list-item.component.scss']
})
export class RadioListItemComponent implements OnInit {

  @Input() station: any[];
  @Input() selectedStation: object;
  @Input() isClicked: boolean;

  constructor() { }

  ngOnInit() {
  }

}
