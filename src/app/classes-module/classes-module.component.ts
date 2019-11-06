import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-classes-module',
  template: `
    <div class="card card-body p-5 mb-3">
      <ng-content select="app-classes-module-bullets"></ng-content>
      <ng-content select="app-classes-module-image" src=""></ng-content>
      <ng-content select="app-classes-module-description"></ng-content>
    </div>`,
  styleUrls: ['./classes-module.component.css']
})
export class ClassesModuleComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() id: string;
  @Input() bullets: string;
  @Input() img: string;
  @Input() description: string;

  ngOnInit() {
  }

}
