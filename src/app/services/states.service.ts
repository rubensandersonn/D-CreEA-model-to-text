import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleError } from '../shared/helpers/http-response-handler';
import {
  ConditionalRule,
  EffectRule,
  State,
  StatementRule,
  TransitionRule,
} from '../shared/models/api';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  private states = new Subject<State[]>();
  private selectedState = new Subject<State>();

  constructor(private http: HttpClient) {}

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(`/State/Get`).pipe(catchError(handleError));
  }

  setStates(state: State[]) {
    this.states.next(state);
    // return this.http.post(`api/States/setStates`, States).pipe(
    //   catchError(handleError)
    // );
  }

  getSelectedState(): Observable<State> {
    return this.selectedState.asObservable();
  }

  setSelectedState(state: State) {
    this.selectedState.next(state);
    this.getStates().subscribe((states) => {
      const index = states.findIndex((r) => r.label === state.label);

      if (index <= 0) {
        state.id = states.length + 1;
        states.push(state);
      } else {
        states[index] = state;
      }

      this.setStates(states);
    });
    // return this.http.post(`api/States/setStates`, States).pipe(
    //   catchError(handleError)
    // );
  }

  ///////////////////////////////////////////

  addConditionalRule(
    selectedState: State,
    rule: ConditionalRule
  ): Observable<State> {
    selectedState.conditionalRules.push(rule);
    this.setSelectedState(selectedState);
    return this.selectedState.asObservable();
  }

  addEffectRule(selectedState: State, rule: EffectRule): Observable<State> {
    selectedState.effectRules.push(rule);
    this.setSelectedState(selectedState);
    return this.selectedState.asObservable();
  }

  addStatementRule(
    selectedState: State,
    rule: StatementRule
  ): Observable<State> {
    selectedState.statementRules.push(rule);
    this.setSelectedState(selectedState);
    return this.selectedState.asObservable();
  }

  addTransitionRule(
    selectedState: State,
    rule: TransitionRule
  ): Observable<State> {
    if (!selectedState || !selectedState.label || selectedState.label === '') {
      throwError('Nenhum estado selecionado');
    }
    selectedState.transitionRules.push(rule);
    this.setSelectedState(selectedState);
    return this.selectedState.asObservable();
  }
}
