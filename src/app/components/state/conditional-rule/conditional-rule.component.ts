import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Condition, ConditionalRule, State } from 'src/app/shared/models/api';
import { AppEnvironment } from 'src/app/shared/models/app.environment';

@Component({
  selector: 'app-conditional-rule',
  templateUrl: './conditional-rule.component.html',
  styleUrls: ['./conditional-rule.component.css']
})
export class ConditionalRuleComponent implements OnInit {
  conditionalRule: ConditionalRule;
  states: State[];
  constructor(
    private appService: AppService, 
    private appEnvironment: AppEnvironment, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.conditionalRule = {
      id: 0,
      otherwise: null,
      label: "",
      conditions: null,
    }
  }

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
