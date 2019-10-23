import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opus-standard-description',
  templateUrl: './opus-standard-description.component.html',
  styleUrls: ['./opus-standard-description.component.css'],
})
export class OpusStandardDescriptionComponent implements OnInit {
  
  constructor() {}

  @Input()
  medium = '';
  @Input()
  year = '';
  @Input()
  height = '';
  @Input()
  width = '';

  ngOnInit() {}
}
