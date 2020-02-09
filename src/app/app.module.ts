import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER, LOCALE_ID } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PaintingsComponent } from "./paintings/paintings.component";
import { OpusComponent } from "./opus/opus.component";
import { OpusTitleComponent } from "./opus-title/opus-title.component";
import { OpusStandardDescriptionComponent } from "./opus-standard-description/opus-standard-description.component";
import { OpusImageComponent } from "./opus-image/opus-image.component";
import { CoursesComponent } from "./courses/courses.component";
import { InfoComponent } from "./info/info.component";
import { DeferLoadModule } from "@trademe/ng-defer-load";
import { OpusCustomDescriptionComponent } from "./opus-custom-description/opus-custom-description.component";
import {
  I18NextModule,
  I18NEXT_SERVICE,
  ITranslationService,
  defaultInterpolationFormat
} from "angular-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en";
import fr from "./locales/fr";

export function appInit(i18next: ITranslationService) {
  return () => {
    return i18next.use(LanguageDetector).init({
      //lng: "fr",
      whitelist: ["en", "fr"],
      fallbackLng: "en",
      debug: true,
      returnEmptyString: false,
      ns: ["default", "translation", "validation", "error"],
      interpolation: {
        format: I18NextModule.interpolationFormat(defaultInterpolationFormat)
      },
      resources: {
        en: en,
        fr: fr
      }
    });
  };
}

export function localeIdFactory(i18next: ITranslationService) {
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
  }
];

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
    OpusCustomDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeferLoadModule,
    I18NextModule.forRoot()
  ],
  providers: [I18N_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
