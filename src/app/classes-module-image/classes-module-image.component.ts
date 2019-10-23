import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-classes-module-image',
  templateUrl: './classes-module-image.component.html',
  styleUrls: ['./classes-module-image.component.css']
})
export class ClassesModuleImageComponent implements OnInit {

  constructor() { }

  @Input()
  src = '';

  ngOnInit() {
  }

}
