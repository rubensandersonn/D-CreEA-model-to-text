import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { State, TransitionRule } from 'src/app/shared/models/api';
import { AppEnvironment } from 'src/app/shared/models/app.environment';

@Component({
  selector: 'app-transition-rule',
  templateUrl: './transition-rule.component.html',
  styleUrls: ['./transition-rule.component.css']
})
export class TransitionRuleComponent implements OnInit {

  transitionRule: TransitionRule;
  states: State[];
  constructor(
    private appService: AppService, 
    private appEnvironment: AppEnvironment, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.transitionRule = {
      id: 0,
      gotoState: null,
      label: ""
    }
  }

  saveRuleState(){

  }

  addSub(){

  }

}
