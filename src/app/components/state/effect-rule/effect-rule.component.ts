import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { RulesService } from 'src/app/services/rules.service';
import { StatesService } from 'src/app/services/states.service';
import { getErrors } from 'src/app/shared/helpers/get-message-errors';
import { Effect, State } from 'src/app/shared/models/api';
import { AppEnvironment } from 'src/app/shared/models/app.environment';
import { CreateEffectRuleRequest } from 'src/app/shared/models/requests-api';

@Component({
  selector: 'app-effect-rule',
  templateUrl: './effect-rule.component.html',
  styleUrls: [
    './effect-rule.component.css',
    '../../../shared/styles/style.css',
  ],
})
export class EffectRuleComponent implements OnInit {
  effectRuleRequest: CreateEffectRuleRequest;
  effect: Effect;
  states: State[];
  xl: string = 'xl';
  openCreateEffect: boolean;

  constructor(
    private appService: AppService,
    private stateService: StatesService,
    private ruleService: RulesService,
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
    this.effectRuleRequest = {
      label: '',
      fromState: '',
      toState: '',
      effects: [],
    };
  }

  clearEffect() {
    this.effect = {
      cons: '',
      pros: '',
      turns: 1,
      effect: '',
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
    this.ruleService.setEffectRules(this.effectRuleRequest).subscribe(
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
    if (!this.effectRuleRequest.label || this.effectRuleRequest.label === '') {
      errors.push('Label inválida');
    }

    return errors.length > 0 ? errors : null;
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
      this.effectRuleRequest.effects.push(this.effect);
    } else {
      this.appService.setAppAlerts([
        { message: 'The Effect of this Rule is required', type: 'danger' },
      ]);
    }
  }

  isEffectValid() {
    return this.effect.effect !== '' && this.effect.turns > 0;
  }
}
