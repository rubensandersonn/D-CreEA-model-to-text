import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { RulesService } from 'src/app/services/rules.service';
import { StatesService } from 'src/app/services/states.service';
import { ConditionalRule, EffectRule, State, StatementRule, TransitionRule } from 'src/app/shared/models/api';
import { AppEnvironment } from 'src/app/shared/models/app.environment';
import { ConditionalRuleComponent } from './conditional-rule/conditional-rule.component';
import { EffectRuleComponent } from './effect-rule/effect-rule.component';
import { StatementRuleComponent } from './statement-rule/statement-rule.component';
import { TransitionRuleComponent } from './transition-rule/transition-rule.component';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  showStatementForm: boolean;
  showConditionalForm: boolean;
  showTransitionForm: boolean;
  showEffectForm: boolean;
  showRuleForm: boolean;

  
  conditionalRuleRequest: ConditionalRule;
  transitionRuleRequest: TransitionRule;
  effectRuleRequest: EffectRule;
  statementRuleRequest: StatementRule;
  

  constructor(
    private appService: AppService, 
    private stateService:StatesService,
    private rulesService: RulesService,
    private appEnvironment: AppEnvironment, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.hideAll();
    
  }

  /////////////////

  showStatementRule(){
    this.hideAll();
    this.showStatementForm = true;
  }

  showEffectRule(){
    this.hideAll();
    this.showEffectForm = true;
  }

  showConditionalRule(){
    this.hideAll();
    this.showConditionalForm = true;
  }

  showTransitionRule(){
    this.hideAll();
    this.showTransitionForm = true;
  }

  hideAll(){
    this.showStatementForm = false;
    this.showConditionalForm = false;
    this.showTransitionForm = false;
    this.showEffectForm = false;
    
  }

  //////////////////////////

}
