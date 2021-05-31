import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { RulesService } from 'src/app/services/rules.service';
import { StatesService } from 'src/app/services/states.service';
import { getErrors } from 'src/app/shared/helpers/get-message-errors';
import { Condition, State } from 'src/app/shared/models/api';
import { AppEnvironment } from 'src/app/shared/models/app.environment';
import { CreateConditionalRuleRequest } from 'src/app/shared/models/requests-api';

@Component({
  selector: 'app-conditional-rule',
  templateUrl: './conditional-rule.component.html',
  styleUrls: [
    './conditional-rule.component.css',
    '../../../shared/styles/style.css',
  ],
})
export class ConditionalRuleComponent implements OnInit {
  conditionalRuleRequest: CreateConditionalRuleRequest;
  states: State[];
  condition: Condition;
  xl: string = 'xl';
  openCreateCondition: boolean;

  constructor(
    private appService: AppService,
    private stateService: StatesService,
    private ruleService: RulesService,
    private appEnvironment: AppEnvironment,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.openCreateCondition = false;
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
    this.conditionalRuleRequest = {
      otherwise: '',
      label: '',
      conditions: [],
      fromState: '',
    };
  }

  clearCondition() {
    this.condition = {
      effectIfTrue: {
        cons: '',
        effect: '',
        pros: '',
        turns: 1,
      },
      stateIfTrue: '',
      test: '', // statement fact
    };
  }

  loadStates() {
    this.stateService.getStates().subscribe(
      (states) => {
        console.log('states', states);
        this.states = states;
      },
      (errors: Object) => {
        console.log('errou', errors);
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
    this.ruleService.setConditionalRules(this.conditionalRuleRequest).subscribe(
      () => {
        this.appService.setAppAlerts([{ message: 'Success', type: 'success' }]);
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
      !this.conditionalRuleRequest.label ||
      this.conditionalRuleRequest.label === ''
    ) {
      errors.push('Label inválida');
    }

    return errors.length > 0 ? errors : null;
  }

  onAddCondition() {
    this.openCreateCondition = true;
    this.clearCondition();
  }

  addCondition() {
    if (this.isConditionValid()) {
      this.conditionalRuleRequest.conditions.push(this.condition);
    } else {
      this.appService.setAppAlerts([
        { message: 'The Effect of the condition is required', type: 'danger' },
      ]);
    }
  }

  isConditionValid() {
    return (
      this.condition.test !== '' &&
      this.condition.stateIfTrue !== '' &&
      this.condition.effectIfTrue.effect !== ''
    );
  }

  seeMore(c: any) {}

  printEffect(c: Condition): string {
    c.effectIfTrue;
    c.stateIfTrue;
    c.test;
    return '';
  }
}
