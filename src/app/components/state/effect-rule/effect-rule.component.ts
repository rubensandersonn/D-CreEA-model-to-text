import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { EffectRule, State } from 'src/app/shared/models/api';
import { AppEnvironment } from 'src/app/shared/models/app.environment';

@Component({
  selector: 'app-effect-rule',
  templateUrl: './effect-rule.component.html',
  styleUrls: ['./effect-rule.component.css']
})
export class EffectRuleComponent implements OnInit {
  effectRule: EffectRule;
  states: State[];
  constructor(
    private appService: AppService, 
    private appEnvironment: AppEnvironment, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.effectRule = {
      id: 0,
      gotoState: null,
      label: "",
      effects: []
    }
  }

  saveRuleState(){

  }

  addSub(){

  }

  seeMore(c: any){
    
  }

}
