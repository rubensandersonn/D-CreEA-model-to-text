import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { handleError } from "../shared/helpers/http-response-handler";
import { State, Deck } from "../shared/models/api";

@Injectable({
  providedIn: "root",
})
export class DeckService {
  constructor(private http: HttpClient) {}

  getDecks(gameId: string): Observable<Deck[]> {
    return this.http.get<Deck[]>(`/Deck/all/${gameId}`).pipe(catchError(handleError));
  }

  getDeck(deckId: string): Observable<Deck> {
    return this.http.get<Deck>(`/Deck/${deckId}`).pipe(catchError(handleError));
  }

  createDecks(gameId: string, rule: Deck): Observable<State> {
    return this.http.post<State>(`/Deck/${gameId}`, rule).pipe(catchError(handleError));
  }

  updateDecks(gameId: string, rule: Deck): Observable<State> {
    return this.http.patch<State>(`/Deck/${gameId}`, rule).pipe(catchError(handleError));
  }

  deleteDecks(gameId: string, rule: Deck): Observable<State> {
    return this.http.delete<State>(`/Deck/${gameId}`).pipe(catchError(handleError));
  }
}
