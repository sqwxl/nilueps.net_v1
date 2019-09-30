import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-opus-image',
  templateUrl: './opus-image.component.html',
  styleUrls: ['./opus-image.component.css'],
})
export class OpusImageComponent implements OnInit {
  constructor() {}

  @HostBinding('class')
  classes = ['opus-image'];

  @Input()
  src = '';

  ngOnInit() {}
}
