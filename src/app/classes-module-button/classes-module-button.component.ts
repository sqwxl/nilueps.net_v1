import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-classes-module-button',
  templateUrl: './classes-module-button.component.html',
  styleUrls: ['./classes-module-button.component.css']
})
export class ClassesModuleButtonComponent implements OnInit {

  constructor() {}

  @Input()
  title = '';
  
  @Input()
  id = "";

  ngOnInit() {
  }

}
