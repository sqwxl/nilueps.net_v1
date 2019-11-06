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
import { OpusCustomDescriptionComponent } from './opus-custom-description/opus-custom-description.component';
import { ClassesModuleComponent } from './classes-module/classes-module.component';
import { ClassesModuleDescriptionComponent } from './classes-module-description/classes-module-description.component';
import { ClassesModuleImageComponent } from './classes-module-image/classes-module-image.component';
import { ClassesModuleBulletsComponent } from './classes-module-bullets/classes-module-bullets.component';
import { ClassesModuleButtonComponent } from './classes-module-button/classes-module-button.component';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';

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
    OpusCustomDescriptionComponent,
    ClassesModuleComponent,
    ClassesModuleDescriptionComponent,
    ClassesModuleImageComponent,
    ClassesModuleBulletsComponent,
    ClassesModuleButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DeferLoadModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
