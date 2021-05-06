import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { RulesService } from 'src/app/services/rules.service';
import { StatesService } from 'src/app/services/states.service';
import { ConditionalRule, EffectRule, Rule, State, StatementRule, TransitionRule } from 'src/app/shared/models/api';
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

  conditionalRules: ConditionalRule[];
  transitionRules: TransitionRule[];
  effectRules: EffectRule[];
  statementRules: StatementRule[];
  
  
  selectedState: State;
  states: State[];

  constructor(
    private appService: AppService, 
    private stateService:StatesService,
    private rulesService: RulesService,
    private appEnvironment: AppEnvironment, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.hideAll();
    this.loadStates();
    this.getSelectState();
    this.showRuleForm = false;
    
  }

  checkConditionalRulesUpdate(){
    this.rulesService.getConditionalRules().subscribe(rules => {
      this.states[0].conditionalRules = rules; // PROBLEMO: QUAL STATE?
    }, (erros: string[])=>{
      this.appService.setAppAlerts(erros.map(error=> ({message: error, type: "danger"})));
    })
  }

  loadStates(){
    this.stateService.getStates().subscribe(result => {
      this.states = result;
    }, (erros: string[])=>{
      this.appService.setAppAlerts(erros.map(error=> ({message: error, type: "danger"})));
    })
  }

  selectState(stateId: number){
    const state:State = this.states.find(s => s.id === stateId);
    this.stateService.setSelectedState(state);
  }

  getSelectState(){
    this.stateService.getSelectedState().subscribe(state => {
      this.selectedState = state;
    }, (erros: string[])=>{
      this.appService.setAppAlerts(erros.map(error=> ({message: error, type: "danger"})));
    })
  }

  addRule(){
    this.showRuleForm = true;
    this.showStatementForm = true;
  }

  saveState(){

  }

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

  seeMore(c: any){
    
  }

}
