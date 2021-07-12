import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AppService } from "src/app/services/app.service";
import { GameService } from "src/app/services/game.service";
import { StateService } from "src/app/services/states.service";
import { ConditionalRule, EffectRule, State, StatementRule } from "src/app/shared/models/api";
import { AppEnvironment } from "src/app/shared/models/app.environment";

@Component({
  selector: "app-state",
  templateUrl: "./state.component.html",
  styleUrls: ["./state.component.css", "../../shared/styles/style.css"],
})
export class StateComponent implements OnInit {
  showStatementForm: boolean;
  showConditionalForm: boolean;
  showTransitionForm: boolean;
  showEffectForm: boolean;
  show: boolean;

  gameId: string;

  conditionalRuleRequest: ConditionalRule;
  effectRuleRequest: EffectRule;
  statementRuleRequest: StatementRule;

  state: State;

  constructor(
    private appService: AppService,
    private stateService: StateService,
    private gameService: GameService,
    private appEnvironment: AppEnvironment,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.state = {
      id: "",
      label: "",
      conditionalRule: null,
      effectRule: null,
      statementRules: [],
      transition: null,
    };

    this.gameService.getGameId().subscribe((id) => {
      this.gameId = id;
    });

    this.hideAll();
  }

  saveState() {
    const service = this.state.id ? this.stateService.updateState : this.stateService.createState;

    service(this.gameId, this.state).subscribe(
      (result) => {
        console.log("state", result);
        this.state = result;
        this.appService.setAppAlerts([{ message: "Saved", type: "success" }]);
      },
      (erros: string[]) => {
        console.log("errors", erros);
        this.appService.setAppAlerts(erros.map((error) => ({ message: error, type: "danger" })));
      }
    );
  }

  /////////////////

  showRuleForm() {
    this.show = true;
  }

  showStatementRule() {
    this.hideAll();
    this.showStatementForm = true;
  }

  showEffectRule() {
    this.hideAll();
    this.showEffectForm = true;
  }

  showConditionalRule() {
    this.hideAll();
    this.showConditionalForm = true;
  }

  showTransitionRule() {
    this.hideAll();
    this.showTransitionForm = true;
  }

  hideAll() {
    this.showStatementForm = false;
    this.showConditionalForm = false;
    this.showTransitionForm = false;
    this.showEffectForm = false;
  }

  //////////////////////////

  seeMore(c: any) {
    console.log("not implemented");
  }
}
