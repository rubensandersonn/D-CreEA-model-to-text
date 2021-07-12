import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { handleError } from "../shared/helpers/http-response-handler";
import { Card } from "../shared/models/api";

@Injectable({
  providedIn: "root",
})
export class CardService {
  constructor(private http: HttpClient) {}

  getCards(deckId: string): Observable<Card[]> {
    return this.http.get<Card[]>(`/Card/all${deckId}`).pipe(catchError(handleError));
  }

  getCard(deckId: string): Observable<Card> {
    return this.http.get<Card>(`/Card/${deckId}`).pipe(catchError(handleError));
  }

  createCard(deckId: string, rule: Card): Observable<Card> {
    return this.http.post<Card>(`/Card/${deckId}`, rule).pipe(catchError(handleError));
  }

  updateCard(deckId: string, rule: Card): Observable<Card> {
    return this.http.patch<Card>(`/Card/${deckId}`, rule).pipe(catchError(handleError));
  }

  deleteCard(deckId: string, rule: Card): Observable<Card> {
    return this.http.delete<Card>(`/Card/${deckId}`).pipe(catchError(handleError));
  }
}
