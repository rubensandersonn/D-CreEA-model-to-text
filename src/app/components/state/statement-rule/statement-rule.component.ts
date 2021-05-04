import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { State, Statement, StatementRule } from 'src/app/shared/models/api';
import { AppEnvironment } from 'src/app/shared/models/app.environment';

@Component({
  selector: 'app-statement-rule',
  templateUrl: './statement-rule.component.html',
  styleUrls: ['./statement-rule.component.css']
})
export class StatementRuleComponent implements OnInit {
  statementRule: StatementRule;
  states: State[];
  constructor(
    private appService: AppService, 
    private appEnvironment: AppEnvironment, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.statementRule = {
      id: 0,
      gotoState: null,
      label: "",
      me: null,
      to: null,
      given: null,
      otherwise: null,
      simpleDescription: null,
      when: null,
      then: null,
    }
  }

  saveRuleState(){

  }

  addSub(){

  }

  printWhenConditions(when:Statement[]): string
  {
    return "";
  }

}
