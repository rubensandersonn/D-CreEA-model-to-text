import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-lobby",
  templateUrl: "./lobby.component.html",
  styleUrls: ["./lobby.component.css"],
})
export class LobbyComponent implements OnInit {
  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {}

  loadProjects() {}

  see() {
    this.router.navigate(["/games/create"]);
  }
}
