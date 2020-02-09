import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class CoursesComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    window.scrollTo(0, 0);
  }
  yo = "abc";
}
