import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lessons",
  templateUrl: "./lessons.component.html",
  styleUrls: ["./lessons.component.css"]
})
export class lessonsComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    window.scrollTo(0, 0);
  }
  yo = "abc";
}
