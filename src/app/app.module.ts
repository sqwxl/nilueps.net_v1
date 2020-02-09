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
import { CoursesComponent } from './courses/courses.component';
import { InfoComponent } from './info/info.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { OpusCustomDescriptionComponent } from './opus-custom-description/opus-custom-description.component';
import { I18NextModule } from 'angular-i18next';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaintingsComponent,
    OpusComponent,
    OpusTitleComponent,
    OpusStandardDescriptionComponent,
    OpusImageComponent,
    CoursesComponent,
    InfoComponent,
    OpusCustomDescriptionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DeferLoadModule, I18NextModule.forRoot()
  ],
  providers: [
    I18N_PROVIDERS,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function appInit(i18next: ITranslationService) {
  return () => i18next.init({
      whitelist: ['en', 'fr'],
      fallbackLng: 'fr',
      debug: true,
      returnEmptyString: false,
      ns: [
        'translation',
        'validation',
        'error'
      ],
    });
}

export function localeIdFactory(i18next: ITranslationService)  {
  return i18next.language;
}

export const I18N_PROVIDERS = [
{
  provide: APP_INITIALIZER,
  useFactory: appInit,
  deps: [I18NEXT_SERVICE],
  multi: true
},
{
  provide: LOCALE_ID,
  deps: [I18NEXT_SERVICE],
  useFactory: localeIdFactory
}];
