import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { AppEnvironment } from 'src/app/shared/models/app.environment';

@Component({
  selector: 'app-rule-form',
  templateUrl: './rule-form.component.html',
  styleUrls: ['./rule-form.component.css']
})
export class RuleFormComponent implements OnInit {

  showTransition: boolean;
  showConditional: boolean;
  showStatement: boolean;

  constructor(
    private appService: AppService, 
    private appEnvironment: AppEnvironment, 
    private router: Router) { }

  ngOnInit(): void {
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
