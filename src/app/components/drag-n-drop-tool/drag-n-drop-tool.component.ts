import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/services/app.service";
import { StateService } from "src/app/services/states.service";
import { AppEnvironment } from "src/app/shared/models/app.environment";
import { State } from "src/app/shared/models/api";

@Component({
  selector: "app-drag-n-drop-tool",
  templateUrl: "./drag-n-drop-tool.component.html",
  styleUrls: ["./drag-n-drop-tool.component.css", "../../shared/styles/style.css"],
})
export class DragNDropToolComponent implements OnInit {
  editRule: boolean;
  innerHeight: number;
  states: State[];

  constructor(
    private appService: AppService,
    private stateService: StateService,
    private appEnvironment: AppEnvironment,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.innerHeight = window.innerHeight * 0.6;
    this.editRule = true;
  }

  showRuleForm() {
    this.hideAllForms();
    this.editRule = true;
  }

  hideAllForms() {
    this.editRule = false;
  }

  setState() {
    this.editRule = true;
  }
}
