import { Component, OnInit } from '@angular/core';
import moduleContents from "./moduleContents";

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        height:'0',
        overflow:'hidden',
        opacity:'0'
      })),
      state('final', style({
        overflow:'hidden',
        opacity:'1'
      })),
      transition('initial=>final', animate('500ms ease-in-out')),
      transition('final=>initial', animate('500ms ease-in-out'))
    ]),
  ]
})
export class ClassesComponent implements OnInit {
  constructor() { }
  moduleContents = moduleContents;
  ngOnInit() {}
}
