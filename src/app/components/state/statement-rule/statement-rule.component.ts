import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppAlert, AppService } from 'src/app/services/app.service';
import { RulesService } from 'src/app/services/rules.service';
import { StatesService } from 'src/app/services/states.service';
import { getErrors } from 'src/app/shared/helpers/get-message-errors';
import { State, Statement } from 'src/app/shared/models/api';
import { AppEnvironment } from 'src/app/shared/models/app.environment';
import { CreateStatementRuleRequest } from 'src/app/shared/models/requests-api';

@Component({
  selector: 'app-statement-rule',
  templateUrl: './statement-rule.component.html',
  styleUrls: ['./statement-rule.component.css']
})
export class statementRuleComponent implements OnInit {

  statementRuleRequest: CreateStatementRuleRequest;
  states: State[];
  
  constructor(
    private appService: AppService, 
    private stateService: StatesService,
    private ruleService: RulesService,
    private appEnvironment: AppEnvironment, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clear();
  }

  clear(){
    this.clearRequest();
    this.clearStates();
  }

  clearStates(){
    this.states = [];
  }

  clearRequest(){
    this.statementRuleRequest = {
      gotoState: null,
      label: "",
      me: null,
      to: null,
      given: null,
      otherwise: null,
      simplerDescription: null,
      when: null,
      then: null,
      fromState: null
    }
  }

  loadStates(){
    this.stateService.getStates().subscribe(states => {
      this.states = states;
    }, (errors: Object) => {
      var msg: string[] = getErrors(errors);
      this.appService.setAppAlerts(msg.map(error => ({message: error, type: "danger"})))
    });
  }

  saveRule(){
    var err = this.isValid();
    if(err){
      this.appService.setAppAlerts(err.map(error => ({message: error, type: "danger"})))
      return;
    }
    this.ruleService.setStatementRules(this.statementRuleRequest).subscribe(() => {
      this.appService.setAppAlerts([{message: "Success", type: "danger"}])
    }, (errors: Object) => {
      var msg: string[] = getErrors(errors);
      this.appService.setAppAlerts(msg.map(error => ({message: error, type: "danger"})))
    });
  }

  isValid():string[]{
    var errors:string[] = [];
    if(!this.statementRuleRequest.label || this.statementRuleRequest.label === ""){
      errors.push("Label inválida");
    }
    
    if(!this.statementRuleRequest.gotoState || this.statementRuleRequest.gotoState === 0){
      errors.push("Estado destino não selecionado");
    }

    return errors.length > 0? errors: null;
  }


  printWhenConditions(when:Statement[]): string
  {
    return "";
  }

}
