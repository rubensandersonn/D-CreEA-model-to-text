import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleError } from '../shared/helpers/http-response-handler';
import { ConditionalRule, EffectRule, Rule, StatementRule, TransitionRule } from '../shared/models/api';
import { CreateStatementRuleRequest, CreateTransitionRuleRequest } from '../shared/models/requests-api';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  private rules = new Subject<Rule[]>();
  private transitionRules = new Subject<TransitionRule[]>();
  private conditionalRules = new Subject<ConditionalRule[]>();
  private statementRules = new Subject<StatementRule[]>();
  private effectRules = new Subject<EffectRule[]>();

  constructor(private http: HttpClient) { }
  
  getConditionalRules(): Observable<ConditionalRule[]>{
    return this.conditionalRules.asObservable();
  }
  
  getTransitionRules(): Observable<TransitionRule[]>{
    return this.transitionRules.asObservable();
  }
  
  getEffectRules(): Observable<EffectRule[]>{
    return this.effectRules.asObservable();
  }
  
  getStatementRules(): Observable<StatementRule[]>{
    return this.statementRules.asObservable();
  }


  

  setConditionalRules(rule: ConditionalRule[]){
    return this.http.post(`api/Rules/CreateTransitionRule`, rule).pipe(
      catchError(handleError)
    );
  }

  setTransitionRules(rule: CreateTransitionRuleRequest){
    // this.transitionRules.next(rule);
    // return true;
    return this.http.post(`api/Rules/CreateTransitionRule`, rule).pipe(
      catchError(handleError)
    );
  }

  setStatementRules(rule: CreateStatementRuleRequest){
    return this.http.post(`api/Rules/CreateTransitionRule`, rule).pipe(
      catchError(handleError)
    );
  }

  setEffectRules(rule: EffectRule[]){
    return this.http.post(`api/Rules/CreateTransitionRule`, rule).pipe(
      catchError(handleError)
    );
  }
}
