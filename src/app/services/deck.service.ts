import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleError } from '../shared/helpers/http-response-handler';
import { DeckViewModel } from '../shared/models/api';
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

  getDecks(): Observable<DeckViewModel[]> {
    return this.http
      .get<DeckViewModel[]>(`/Deck/Get`)
      .pipe(catchError(handleError));
  }
}
