import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleError } from '../shared/helpers/http-response-handler';
import {
  ConditionalRule,
  EffectRule,
  StatementRule,
  TransitionRule,
} from '../shared/models/api';
import {
  CreateConditionalRuleRequest,
  CreateEffectRuleRequest,
  CreateStatementRuleRequest,
  CreateTransitionRuleRequest,
} from '../shared/models/requests-api';

@Injectable({
  providedIn: 'root',
})
export class RulesService {
  constructor(private http: HttpClient) {}

  getConditionalRules(): Observable<ConditionalRule[]> {
    return this.http
      .get<ConditionalRule[]>(`/Rule/GetConditionalRules`)
      .pipe(catchError(handleError));
  }

  getTransitionRules(): Observable<TransitionRule[]> {
    return this.http
      .get<TransitionRule[]>(`/Rule/GetTransitionRules`)
      .pipe(catchError(handleError));
  }

  getEffectRules(): Observable<EffectRule[]> {
    return this.http
      .get<EffectRule[]>(`/Rule/GetEffectRules`)
      .pipe(catchError(handleError));
  }

  getStatementRules(): Observable<StatementRule[]> {
    return this.http
      .get<StatementRule[]>(`/Rule/GetStatementRules`)
      .pipe(catchError(handleError));
  }

  setConditionalRules(rule: CreateConditionalRuleRequest) {
    return this.http
      .post(`/Rule/CreateConditionalRule`, rule)
      .pipe(catchError(handleError));
  }

  setTransitionRules(rule: CreateTransitionRuleRequest) {
    // this.transitionRules.next(rule);
    // return true;
    return this.http
      .post(`/Rule/CreateTransitionRule`, rule)
      .pipe(catchError(handleError));
  }

  setStatementRules(rule: CreateStatementRuleRequest) {
    return this.http
      .post(`/Rule/CreateStatementRule`, rule)
      .pipe(catchError(handleError));
  }

  setEffectRules(rule: CreateEffectRuleRequest) {
    return this.http
      .post(`/Rule/CreateEffectRule`, rule)
      .pipe(catchError(handleError));
  }
}
