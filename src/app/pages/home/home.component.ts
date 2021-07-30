import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css", "../../shared/styles/style.css"],
})
export class HomeComponent implements OnInit {
  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {}

  createNew() {
    this.router.navigate(["/demo"]);
  }
}
