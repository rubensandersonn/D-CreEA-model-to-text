import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { GameDescriptionFormComponent } from "src/app/components/game-description-form/game-description-form.component";
import { GameplayComponent } from "src/app/components/gameplay/gameplay.component";
import { AppService } from "src/app/services/app.service";
import { GameService } from "src/app/services/game.service";
import { Game } from "src/app/shared/models/api";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css", "../../../shared/styles/style.css"],
})
export class CreateComponent implements OnInit {
  innerHeight: number;
  // @ViewChild(GameDescriptionFormComponent)
  showGDDForm: boolean;
  showGameplayForm: boolean;
  showDecksForm: boolean;
  showCardsForm: boolean;
  showOverviewForm: boolean;

  game: Game;

  constructor(private gamesService: GameService, private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.onHideAll();
    this.clear();
  }

  clear() {
    this.game = {
      id: null,
      audience: null,
      authors: [],
      decks: [],
      description: null,
      knowledgeField: null,
      maxNumberPlayers: 0,
      minNumberPlayers: 0,
      name: null,
      requirements: null,
      states: [],
    };
  }

  onShowGDDForm() {
    this.onHideAll();
    this.showGDDForm = true;
  }

  onShowGameplayForm() {
    this.onHideAll();
    this.showGameplayForm = true;
  }

  onShowDecksForm() {
    this.onHideAll();
    this.showDecksForm = true;
  }

  onShowOverviewForm() {
    this.onHideAll();
    this.showOverviewForm = true;
  }

  onShowCardsForm() {
    this.onHideAll();
    this.showCardsForm = true;
  }

  onHideAll() {
    this.showOverviewForm = false;
    this.showGDDForm = false;
    this.showCardsForm = false;
    this.showDecksForm = false;
    this.showGameplayForm = false;
  }
}
