import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { RulesService } from 'src/app/services/rules.service';
import { StatesService } from 'src/app/services/states.service';
import { Condition, ConditionalRule, State } from 'src/app/shared/models/api';
import { AppEnvironment } from 'src/app/shared/models/app.environment';

@Component({
  selector: 'app-conditional-rule',
  templateUrl: './conditional-rule.component.html',
  styleUrls: ['./conditional-rule.component.css']
})
export class ConditionalRuleComponent implements OnInit {
  conditionalRuleRequest: ConditionalRule;
  
  constructor(
    private appService: AppService, 
    private stateService: StatesService,
    private rulesService: RulesService,
    private appEnvironment: AppEnvironment, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.conditionalRuleRequest = {
      id: 0,
      otherwise: null,
      label: "",
      conditions: null,
      fromState: null
    }

  }

  // loadStates(){
  //   this.stateService.getStates().subscribe(states => {
  //     this.states = states;
  //   },(erros: string[])=>{
  //     this.appService.setAppAlerts(erros.map(error=> ({message: error, type: "danger"})));
  //   })
  // }

  // setSelectedState(){
  //   this.stateService.setSelectedState({
  //     id: 0,
  //     label: null,
  //     conditionalRules: [],
  //     effectRules: [],
  //     statementRules: [],
  //     transitionRules: []
  //   });
  // }
  
  // getSelectedState(){
  //   this.stateService.getSelectedState().subscribe(state => {
  //     this.selectedState = state;
  //   },(erros: string[])=>{
  //     this.appService.setAppAlerts(erros.map(error=> ({message: error, type: "danger"})));
  //   })
  // }

  saveRuleState(){
    
  }

  addSub(){

  }

  seeMore(c: any){
    
  }

  printEffect(c:Condition): string{
    c.effectIfTrue;
    c.stateIfTrue;
    c.test
    return "";
  }

}
