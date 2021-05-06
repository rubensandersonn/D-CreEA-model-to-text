import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { State } from '../shared/models/api';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  private states = new Subject<State[]>();
  private selectedState = new Subject<State>();

  constructor(private http: HttpClient) { }

  getStates(): Observable<State[]>{
    return this.states.asObservable();
  }

  setStates(state: State[]){
    this.states.next(state);
    // return this.http.post(`api/States/setStates`, States).pipe(
    //   catchError(handleError)
    // );
  }

  getSelectedState(): Observable<State>{
    return this.selectedState.asObservable();
  }

  setSelectedState(state: State){
    this.selectedState.next(state);
    // return this.http.post(`api/States/setStates`, States).pipe(
    //   catchError(handleError)
    // );
  }
}
