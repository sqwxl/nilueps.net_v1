import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-classes-module',
  templateUrl: './classes-module.component.html',
  styleUrls: ['./classes-module.component.css']
})
export class ClassesModuleComponent implements OnInit {

  constructor() { }

  @Input()
  title = '';
  @Input()
  id = '';
  @Input()
  bullets = '';
  @Input()
  img = '';
  @Input()
  description = '';

  ngOnInit() {
  }

}
