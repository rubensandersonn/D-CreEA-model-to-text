import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/services/app.service";
import { EffectRuleService } from "src/app/services/effectRule.service";
import { StateService } from "src/app/services/states.service";
import { getErrors } from "src/app/shared/helpers/get-message-errors";
import { Effect, EffectRule, State } from "src/app/shared/models/api";
import { AppEnvironment } from "src/app/shared/models/app.environment";
import { CreateEffectRuleRequest } from "src/app/shared/models/requests-api";

@Component({
  selector: "app-effect-rule",
  templateUrl: "./effect-rule.component.html",
  styleUrls: ["./effect-rule.component.css", "../../../shared/styles/style.css"],
})
export class EffectRuleComponent implements OnInit {
  rule: EffectRule;
  effect: Effect;
  states: State[];
  xl: string = "xl";
  openCreateEffect: boolean;

  gameId: string;
  stateId: string;

  constructor(
    private appService: AppService,
    private stateService: StateService,
    private ruleService: EffectRuleService,
    private appEnvironment: AppEnvironment,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.openCreateEffect = false;
    this.clear();
    this.loadStates();
  }

  clear() {
    this.clearRequest();
    this.clearStates();
    this.clearEffect();
  }

  clearStates() {
    this.states = [];
  }

  clearRequest() {
    this.rule = {
      id: null,
      label: null,
      effects: [],
    };
  }

  clearEffect() {
    this.effect = {
      simpleEffect: null,
      forever: false,
      statusChange: null,
      toSelf: false,
      toSpecific: null,
      turns: 0,
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
    const service = this.rule.id ? this.ruleService.updateEffectRule : this.ruleService.createEffectRule;

    service(this.stateId, this.rule).subscribe(
      (result) => {
        console.log("rule", result);
        this.rule = result.effectRule;
        this.appService.setAppAlerts([{ message: "Saved", type: "success" }]);
      },
      (erros: string[]) => {
        console.log("errors", erros);
        this.appService.setAppAlerts(erros.map((error) => ({ message: error, type: "danger" })));
      }
    );
  }

  isValid(): string[] {
    return null;
  }

  onAddEffect() {
    this.clearEffect();
    this.openCreateEffect = true;
  }

  onCancelAddEffect() {
    this.openCreateEffect = false;
  }

  addEffect() {
    if (this.isEffectValid()) {
      this.rule.effects.push(this.effect);
    } else {
      this.appService.setAppAlerts([{ message: "The Effect of this Rule is invalid", type: "danger" }]);
    }
  }

  isEffectValid() {
    return true;
  }
}
