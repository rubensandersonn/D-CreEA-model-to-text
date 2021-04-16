import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GDDViewModel } from '../shared/models/api';
import { catchError } from "rxjs/operators";
import { handleError } from '../shared/helpers/http-response-handler';

@Injectable({
  providedIn: 'root'
})
export class GddService {

  constructor(private http: HttpClient) { }

  setGDD(gdd: GDDViewModel){
    return this.http.post(`api/GDD/setGDD`, gdd).pipe(
      catchError(handleError)
    );
  }
}
