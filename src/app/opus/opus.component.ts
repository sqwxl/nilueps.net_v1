import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opus',
  templateUrl: './opus.component.html',
  styleUrls: ['./opus.component.css'],
})
export class OpusComponent implements OnInit {
  constructor() {}
  @Input()
  title = '';

  @Input()
  description = '';

  @Input()
  date = '';

  @Input()
  img = '';
  ngOnInit() {
    window.scrollTo(0,0);
  }
}
