import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/services/app.service";
import { Router } from "@angular/router";
import { GameService } from "src/app/services/game.service";
import { Game } from "src/app/shared/models/api";
import { AppEnvironment } from "src/app/shared/models/app.environment";

@Component({
  selector: "app-game-description-form",
  templateUrl: "./game-description-form.component.html",
  styleUrls: ["./game-description-form.component.css", "../../shared/styles/style.css"],
})
export class GameDescriptionFormComponent implements OnInit {
  game: Game;

  constructor(
    private gameService: GameService,
    private appService: AppService,
    private appEnvironment: AppEnvironment,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.game = {
      id: null,
      name: "",
      simplyGameplay: "",
      description: "",
      audience: "",
      knowledgeField: "",
      requirements: "",
      minNumberPlayers: 0,
      maxNumberPlayers: 0,
      authors: [""],
      decks: [],
      states: [],
    };
  }

  saveGame() {
    const service = this.game.id ? this.gameService.updateGame : this.gameService.createGame;

    service(this.game).subscribe(
      (result) => {
        console.log("game", result);
        this.game = result;
        this.appService.setAppAlerts([{ message: "Saved", type: "success" }]);
      },
      (erros: string[]) => {
        console.log("errors", erros);
        this.appService.setAppAlerts(erros.map((error) => ({ message: error, type: "danger" })));
      }
    );
  }
}
