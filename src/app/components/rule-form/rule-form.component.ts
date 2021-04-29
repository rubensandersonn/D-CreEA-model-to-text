import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { AppEnvironment } from 'src/app/shared/models/app.environment';
import { ConditionalRule, StatementRule, TransitionRule } from 'src/app/shared/models/api';

@Component({
  selector: 'app-rule-form',
  templateUrl: './rule-form.component.html',
  styleUrls: ['./rule-form.component.css']
})
export class RuleFormComponent implements OnInit {

  states: string[];
  showTransition: boolean;
  showConditional: boolean;
  showStatement: boolean;

  transitionRule:TransitionRule;
  statementRule: StatementRule;
  conditionalRule:ConditionalRule;

  constructor(
    private appService: AppService, 
    private appEnvironment: AppEnvironment, 
    private router: Router) { }

  ngOnInit(): void {
    this.states = ["Initial State", "Setup State"];
    this.transitionRule = {
      gotoState: null,
      label: ""
    }
    this.conditionalRule = {
      conditions: [], // state to go when the condition is true
      otherwise: null,
      label: ""
    }

    this.statementRule = {
      gotoState: null,
      label: "",
      statement: null
    }
  }

  saveRuleState(){
    console.log("saving rules state...");
  }

  showTransitionForm(){
    this.hideAll();
    this.showTransition = true;
  }

  showConditionalForm(){
    this.hideAll();
    this.showConditional = true;
  }

  showStatementForm(){
    this.hideAll();
    this.showStatement = true;
  }

  hideAll(){
    this.showTransition = false;
    this.showConditional = false;
    this.showStatement = false;
  }

}
