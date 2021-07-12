import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/services/app.service";
import { CardService } from "src/app/services/cards.service";
import { DeckService } from "src/app/services/deck.service";
import { GameService } from "src/app/services/game.service";
import { StateService } from "src/app/services/states.service";
import { getErrors } from "src/app/shared/helpers/get-message-errors";
import { Card, Deck } from "src/app/shared/models/api";
import { AppEnvironment } from "src/app/shared/models/app.environment";
import {
  cardBackFields,
  cardBackFieldsRequest,
  cardFrontFields,
  cardFrontFieldsRequest,
  SaveDeckRequest,
} from "src/app/shared/models/requests-api";
import { DeckViewModel } from "src/app/shared/models/viewmodel";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: [
    "./cards.component.css",
    "../../shared/styles/style.css",
    "../../shared/styles/cardsAndDecks.css",
    "../../shared/styles/card.css",
  ],
})
export class CardsComponent implements OnInit {
  card: Card;
  deckRequest: SaveDeckRequest;

  frontFields: cardFrontFields;
  backFields: cardBackFields;
  // restrição: para cada valor de pontuação, este só pode aparecer em um deck
  // mock testing

  frontRequest: cardFrontFieldsRequest;
  backRequest: cardBackFieldsRequest;

  decks: Deck[];
  deckViewmodels: DeckViewModel[];

  enableCardBack: boolean;

  typesOfFields: string[] = ["removable", "required", "inexistent"];

  gameId: string;
  stateId: string;

  constructor(
    private appService: AppService,
    private cardService: CardService,
    private deckService: DeckService,
    private stateService: StateService,
    private gameService: GameService,
    private appEnvironment: AppEnvironment,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clear();
    this.loadDecks();

    this.gameService.getGameId().subscribe((id) => {
      this.gameId = id;
    });

    this.stateService.getStateId().subscribe((id) => {
      this.stateId = id;
    });

    // checkbox do capeta
    this.setCheckboxes();

    this.selectDeck(0);

    console.log("deck request", this.deckRequest);
    console.log("deckViewmodels", this.deckViewmodels[0]);

    this.enableCardBack =
      this.deckRequest.cardBackFields["title"].checked ||
      this.deckRequest.cardBackFields["answers"].checked ||
      this.deckRequest.cardBackFields["effect"].checked ||
      this.deckRequest.cardBackFields["cost"].checked ||
      this.deckRequest.cardBackFields["level"].checked ||
      this.deckRequest.cardBackFields["earning"].checked;

    console.log("any checked?", this.enableCardBack);
  }

  setCheckboxes() {
    this.frontFields = {
      title: {
        name: "title",
        cardSide: "front",
        checked: true,
        type: "required",
      },
      art: {
        name: "art",
        cardSide: "front",
        checked: true,
        type: "removable",
      },
      description: {
        name: "description",
        cardSide: "front",
        checked: true,
        type: "required",
      },
      effect: {
        name: "effect",
        cardSide: "any",
        checked: true,
        type: "removable",
      },
      cost: { name: "cost", cardSide: "any", checked: true, type: "removable" },
      level: {
        name: "level",
        cardSide: "any",
        checked: true,
        type: "removable",
      },
      earning: {
        name: "earning",
        cardSide: "any",
        checked: true,
        type: "removable",
      },
    };

    this.backFields = {
      title: {
        name: "title",
        cardSide: "back",
        checked: false,
        type: "removable",
      },
      answers: {
        name: "answers",
        cardSide: "back",
        checked: true,
        type: "removable",
      },
      cost: {
        name: "cost",
        cardSide: "any",
        checked: false,
        type: "removable",
      },
      level: {
        name: "level",
        cardSide: "any",
        checked: false,
        type: "removable",
      },
      earning: {
        name: "earning",
        cardSide: "any",
        checked: false,
        type: "removable",
      },
      effect: {
        name: "effect",
        cardSide: "any",
        checked: false,
        type: "removable",
      },
    };

    // creating the mock deck
    var d: DeckViewModel = {
      id: null,
      name: "Deck de Desafios",
      type: "Desafios",
      description: " Deck de desafios",
      color: "#663030",
      cardFrontFields: this.frontFields,
      cardBackFields: this.backFields,
    };

    // creating the mock deck
    var d2: DeckViewModel = {
      id: null,
      name: "Deck de Jogo",
      type: "Jogo",
      description: " Deck de Jogo",
      color: "#30665d",
      cardFrontFields: this.frontFields,
      cardBackFields: this.backFields,
    };
    this.deckViewmodels.push(d);
    this.deckViewmodels.push(d2);
  }

  clear() {
    this.clearRequest();
  }

  clearRequest() {
    this.frontRequest = {
      art: "",
      cost: 0,
      description: "",
      earning: 0,
      effect: "",
      level: 0,
      title: "",
    };

    this.backRequest = {
      answers: "",
      cost: 0,
      earning: 0,
      effect: "",
      level: 0,
      title: "",
    };

    /////////////////////////
    this.card = {
      id: null,
      cardFront: {
        title: null,
        description: "",
        art: null,
        effect: null,
        earning: 0,
        cost: 0,
        level: 0,
      },
      cardBack: {
        title: null,
        answers: null,
        effect: null,
        earning: 0,
        cost: 0,
        level: 0,
      },
    };

    this.deckRequest = {
      description: "",
      name: "",
      color: "#663030",
      cardFrontFields: null,
      cardBackFields: null,
    };

    this.deckViewmodels = [];
  }

  loadDecks() {
    this.deckService.getDecks(this.stateId).subscribe(
      (deckViewmodels) => {
        this.decks = deckViewmodels;
        this.selectDeck(0);
      },
      (errors: Object) => {
        var msg: string[] = getErrors(errors);
        this.appService.setAppAlerts(msg.map((error) => ({ message: error, type: "danger" })));
      }
    );
  }

  saveCard() {
    const service = this.card.id ? this.cardService.updateCard : this.cardService.createCard;

    service(this.deckRequest.name, this.card).subscribe(
      // erro aqui
      (result) => {
        console.log("card", result);
        this.card = result;
        this.appService.setAppAlerts([{ message: "Saved", type: "success" }]);
      },
      (erros: string[]) => {
        console.log("errors", erros);
        this.appService.setAppAlerts(erros.map((error) => ({ message: error, type: "danger" })));
      }
    );
  }

  isValid(): string[] {
    return null;
  }

  selectDeck(deck: number) {
    if (!this.deckViewmodels || this.deckViewmodels.length <= 0 || this.deckViewmodels.length <= deck) return;
    this.deckRequest = {
      description: this.deckViewmodels[deck].description,
      name: this.deckViewmodels[deck].name,
      color: this.deckViewmodels[deck].color,
      cardFrontFields: this.deckViewmodels[deck].cardFrontFields,
      cardBackFields: this.deckViewmodels[deck].cardBackFields,
    };

    // if any of the deck fields are enabled
    if (this.enableCardBack) {
      for (var i = 0; i < this.deckViewmodels.length; i++) {
        document.getElementById("deck-" + i).style.borderWidth = "0px";
      }
      document.getElementById("deck-" + deck).style.borderWidth = "5px";
    }
  }
}
