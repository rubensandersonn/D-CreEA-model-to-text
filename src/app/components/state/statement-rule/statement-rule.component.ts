import { Component, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AppAlert, AppService } from "src/app/services/app.service";
import { StatementRuleService } from "src/app/services/statementRule.service";
import { StateService } from "src/app/services/states.service";
import { getErrors } from "src/app/shared/helpers/get-message-errors";
import { State, StatementRule } from "src/app/shared/models/api";
import { AppEnvironment } from "src/app/shared/models/app.environment";

@Component({
  selector: "app-statement-rule",
  templateUrl: "./statement-rule.component.html",
  styleUrls: ["./statement-rule.component.css", "../../../shared/styles/style.css"],
})
export class statementRuleComponent implements OnInit {
  rule: StatementRule;
  rules: StatementRule[];
  states: State[];

  gameId: string;
  stateId: string;

  constructor(
    private appService: AppService,
    private stateService: StateService,
    private ruleService: StatementRuleService,
    private appEnvironment: AppEnvironment,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clear();
  }

  clear() {
    this.clearRequest();
    this.clearStates();
  }

  clearStates() {
    this.states = [];
  }

  clearRequest() {
    this.rule = {
      id: null,
      label: null,
      simplerDescription: null,
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
    const service = this.rule.id ? this.ruleService.updateStatementRule : this.ruleService.createStatementRule;

    service(this.stateId, this.rule).subscribe(
      (result) => {
        console.log("rule", result);
        this.rules = result.statementRules;
        this.appService.setAppAlerts([{ message: "Saved", type: "success" }]);
      },
      (erros: string[]) => {
        console.log("errors", erros);
        this.appService.setAppAlerts(erros.map((error) => ({ message: error, type: "danger" })));
      }
    );
  }

  isValid(): string[] {
    var errors: string[] = [];
    if (!this.rule.label || this.rule.label === "") {
      errors.push("Label inválida");
    }

    return errors.length > 0 ? errors : null;
  }

  printWhenConditions(when: any[]): string {
    return "";
  }
}
