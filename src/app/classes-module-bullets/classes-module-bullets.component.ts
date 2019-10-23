import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-classes-module-bullets',
  templateUrl: './classes-module-bullets.component.html',
  styleUrls: ['./classes-module-bullets.component.css']
})
export class ClassesModuleBulletsComponent implements OnInit {

  constructor() { }

  @HostBinding('class')
  classes =['classes-module-bullets']

  @Input()
  bullets="";

  ngOnInit() {
  }

}
