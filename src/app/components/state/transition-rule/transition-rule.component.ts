import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppAlert, AppService } from 'src/app/services/app.service';
import { RulesService } from 'src/app/services/rules.service';
import { StatesService } from 'src/app/services/states.service';
import { getErrors } from 'src/app/shared/helpers/get-message-errors';
import { State } from 'src/app/shared/models/api';
import { AppEnvironment } from 'src/app/shared/models/app.environment';
import { CreateTransitionRuleRequest } from 'src/app/shared/models/requests-api';

@Component({
  selector: 'app-transition-rule',
  templateUrl: './transition-rule.component.html',
  styleUrls: [
    './transition-rule.component.css',
    '../../../shared/styles/style.css',
  ],
})
export class TransitionRuleComponent implements OnInit {
  transitionRuleRequest: CreateTransitionRuleRequest;
  states: State[];

  constructor(
    private appService: AppService,
    private stateService: StatesService,
    private ruleService: RulesService,
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
    this.transitionRuleRequest = {
      toState: 0,
      label: '',
      fromState: 0,
    };
  }

  loadStates() {
    this.stateService.getStates().subscribe(
      (states) => {
        this.states = states;
      },
      (errors: Object) => {
        var msg: string[] = getErrors(errors);
        this.appService.setAppAlerts(
          msg.map((error) => ({ message: error, type: 'danger' }))
        );
      }
    );
  }

  saveRule() {
    var err = this.isValid();
    if (err) {
      this.appService.setAppAlerts(
        err.map((error) => ({ message: error, type: 'danger' }))
      );
      return;
    }
    this.ruleService.setTransitionRules(this.transitionRuleRequest).subscribe(
      () => {
        this.appService.setAppAlerts([{ message: 'Success', type: 'danger' }]);
      },
      (errors: Object) => {
        var msg: string[] = getErrors(errors);
        this.appService.setAppAlerts(
          msg.map((error) => ({ message: error, type: 'danger' }))
        );
      }
    );
  }

  isValid(): string[] {
    var errors: string[] = [];
    if (
      !this.transitionRuleRequest.label ||
      this.transitionRuleRequest.label === ''
    ) {
      errors.push('Label inválida');
    }

    if (
      !this.transitionRuleRequest.toState ||
      this.transitionRuleRequest.toState <= 0
    ) {
      errors.push('Estado destino não selecionado');
    }

    return errors.length > 0 ? errors : null;
  }
}
