import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-classes-module-button',
  templateUrl: './classes-module-button.component.html',
  styleUrls: ['./classes-module-button.component.css']
})
export class ClassesModuleButtonComponent implements OnInit {

  constructor() {}

  @Input() title:string;
  
  @Input() id:string;

  @Output()
  click = new EventEmitter<any>();

  collapsed = true;

  unclick() {
    this.collapsed = !this.collapsed;
    console.log("ok");
  }

  ngOnInit() {
  }

}
