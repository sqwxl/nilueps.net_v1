import { Component, OnInit } from '@angular/core';
import moduleContents from "./moduleContents";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor() { }
  moduleContents = moduleContents;
  ngOnInit() {}
}
