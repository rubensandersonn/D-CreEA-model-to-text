import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { handleError } from '../shared/helpers/http-response-handler';
import { SaveDeckRequest } from '../shared/models/requests-api';

@Injectable({
  providedIn: 'root',
})
export class DecksService {
  constructor(private http: HttpClient) {}

  saveDeck(request: SaveDeckRequest) {
    return this.http
      .post(`/Deck/SaveDeck`, request)
      .pipe(catchError(handleError));
  }
}
