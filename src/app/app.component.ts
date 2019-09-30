import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nilueps';
  @HostBinding('class')
  classes = 'app-root';
}
