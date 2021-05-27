import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

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
