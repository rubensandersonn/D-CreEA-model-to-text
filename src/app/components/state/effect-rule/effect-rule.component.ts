import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { StatesService } from 'src/app/services/states.service';
import { EffectRule, State } from 'src/app/shared/models/api';
import { AppEnvironment } from 'src/app/shared/models/app.environment';

@Component({
  selector: 'app-effect-rule',
  templateUrl: './effect-rule.component.html',
  styleUrls: ['./effect-rule.component.css']
})
export class EffectRuleComponent implements OnInit {
  @Output() effectRuleRequest: EffectRule;
  
  constructor(
    private appService: AppService, 
    private stateService: StatesService,
    private appEnvironment: AppEnvironment, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.effectRuleRequest = {
      id: 0,
      gotoState: null,
      label: "",
      effects: [],
      fromState: null
    }
  }

  saveRuleState(){
    
  }

}
