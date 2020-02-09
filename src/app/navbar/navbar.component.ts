import { Component, OnInit, HostBinding } from "@angular/core";
import { I18NextService } from "angular-i18next";
import i18next from "i18next";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private i18Next: I18NextService) {
    this.i18Next.events.languageChanged.subscribe(lang => {
      this.lang = lang == null ? i18next.options.fallbackLng[0] : lang;
    });
  }

  @HostBinding("class")
  classes = ["navbar"];

  lang: string;

  changeLang(locale: string) {
    this.i18Next.changeLanguage(locale).then(() => {
      location.reload();
    });
  }

  ngOnInit() {}
}
