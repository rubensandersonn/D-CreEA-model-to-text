import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { handleError } from "../shared/helpers/http-response-handler";
import { Game } from "../shared/models/api";

@Injectable({
  providedIn: "root",
})
export class GameService {
  constructor(private http: HttpClient) {}
  private gameId = new Subject<string>();

  setGameId(id: string) {
    this.gameId.next(id);
  }

  getGameId() {
    return this.gameId.asObservable();
  }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`/Game/all`).pipe(catchError(handleError));
  }

  getGame(game: string): Observable<Game> {
    return this.http.get<Game>(`/Game/${game}`).pipe(catchError(handleError));
  }

  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(`/Game`, game).pipe(catchError(handleError));
  }

  updateGame(game: Game): Observable<Game> {
    return this.http.patch<Game>(`/Game`, game).pipe(catchError(handleError));
  }

  deleteGame(game: Game): Observable<Game> {
    return this.http.delete<Game>(`/Game`).pipe(catchError(handleError));
  }
}
