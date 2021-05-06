import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GDDViewModel } from '../shared/models/api';
import { catchError } from "rxjs/operators";
import { handleError } from '../shared/helpers/http-response-handler';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GddService {

  private gdd = new Subject<GDDViewModel>();

  constructor(private http: HttpClient) { }

  getGDD(): Observable<GDDViewModel>{
    return this.gdd.asObservable();
  }

  setGDD(gdd: GDDViewModel): Observable<GDDViewModel>{
    this.gdd.next(gdd);
    return this.gdd.asObservable();
    // return this.http.post(`api/GDD/setGDD`, gdd).pipe(
    //   catchError(handleError)
    // );
  }
}
