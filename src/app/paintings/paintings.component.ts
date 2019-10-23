import { Component, OnInit, Input, ContentChild } from '@angular/core';
//import { OpusTitleComponent } from '../opus-title/opus-title.component';
import works from './works';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css'],
})
export class PaintingsComponent implements OnInit {
  constructor() {}
  works = works;
  ngOnInit() {}
}
