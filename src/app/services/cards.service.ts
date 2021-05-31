import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { handleError } from '../shared/helpers/http-response-handler';
import { SaveCardRequest } from '../shared/models/requests-api';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private http: HttpClient) {}

  saveCard(request: SaveCardRequest) {
    return this.http
      .post(`/Deck/SaveCard`, request)
      .pipe(catchError(handleError));
  }
}
