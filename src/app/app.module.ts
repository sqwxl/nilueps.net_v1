import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { OpusComponent } from './opus/opus.component';
import { OpusTitleComponent } from './opus-title/opus-title.component';
import { OpusStandardDescriptionComponent } from './opus-standard-description/opus-standard-description.component';
import { OpusImageComponent } from './opus-image/opus-image.component';
import { ClassesComponent } from './classes/classes.component';
import { InfoComponent } from './info/info.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaintingsComponent,
    OpusComponent,
    OpusTitleComponent,
    OpusStandardDescriptionComponent,
    OpusImageComponent,
    ClassesComponent,
    InfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DeferLoadModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
