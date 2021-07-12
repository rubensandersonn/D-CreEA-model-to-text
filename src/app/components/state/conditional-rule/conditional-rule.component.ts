import { Component, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/services/app.service";
import { ConditionalRuleService } from "src/app/services/conditionalRule.service";
import { GameService } from "src/app/services/game.service";
import { StateService } from "src/app/services/states.service";
import { getErrors } from "src/app/shared/helpers/get-message-errors";
import { Condition, ConditionalRule, State } from "src/app/shared/models/api";
import { AppEnvironment } from "src/app/shared/models/app.environment";
import { CreateConditionalRuleRequest } from "src/app/shared/models/requests-api";

@Component({
  selector: "app-conditional-rule",
  templateUrl: "./conditional-rule.component.html",
  styleUrls: ["./conditional-rule.component.css", "../../../shared/styles/style.css"],
})
export class ConditionalRuleComponent implements OnInit {
  rule: ConditionalRule;
  states: State[];
  condition: Condition;
  xl: string = "xl";
  openCreateCondition: boolean;
  specificEffect: boolean = false;

  gameId: string;
  stateId: string;

  constructor(
    private appService: AppService,
    private stateService: StateService,
    private ruleService: ConditionalRuleService,
    private gameService: GameService,
    private appEnvironment: AppEnvironment,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.openCreateCondition = false;

    this.gameService.getGameId().subscribe((id) => {
      this.gameId = id;
    });
    this.stateService.getStateId().subscribe((id) => {
      this.stateId = id;
    });

    this.clear();
    this.loadStates();
  }

  clear() {
    this.clearRequest();
    this.clearStates();
    this.clearCondition();
  }

  clearStates() {
    this.states = [];
  }

  clearRequest() {
    this.rule = {
      id: null,
      conditions: [],
      failureCondition: null,
      label: null,
    };
  }

  clearCondition() {
    this.condition = {
      effectIfTrue: {
        turns: 1,
        simpleEffect: null,
        forever: false,
        statusChange: null,
        toSelf: false,
        toSpecific: null,
      },
      stateIfTrue: "",
      test: "", // statement fact
    };
  }

  loadStates() {
    this.stateService.getStates(this.gameId).subscribe(
      (states) => {
        console.log("states", states);
        this.states = states;
      },
      (errors: Object) => {
        console.log("errou", errors);
        var msg: string[] = getErrors(errors);
        this.appService.setAppAlerts(msg.map((error) => ({ message: error, type: "danger" })));
      }
    );
  }

  saveRule() {
    const service = this.rule.id ? this.ruleService.updateConditionalRule : this.ruleService.createConditionalRule;

    service(this.stateId, this.rule).subscribe(
      (result) => {
        console.log("rule", result);
        this.rule = result.conditionalRule;
        this.appService.setAppAlerts([{ message: "Saved", type: "success" }]);
      },
      (erros: string[]) => {
        console.log("errors", erros);
        this.appService.setAppAlerts(erros.map((error) => ({ message: error, type: "danger" })));
      }
    );
  }

  onAddCondition() {
    this.openCreateCondition = true;
    this.clearCondition();
  }

  addCondition() {
    if (this.isConditionValid()) {
      this.rule.conditions.push(this.condition);
    } else {
      this.appService.setAppAlerts([{ message: "The Effect of the condition is invalid", type: "danger" }]);
    }
  }

  isConditionValid() {
    return true;
  }

  seeMore(c: any) {}

  printEffect(c: Condition): string {
    c.effectIfTrue;
    c.stateIfTrue;
    c.test;
    return "";
  }
}
