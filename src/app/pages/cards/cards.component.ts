import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { CardsService } from 'src/app/services/cards.service';
import { DecksService } from 'src/app/services/deck.service';
import { getErrors } from 'src/app/shared/helpers/get-message-errors';
import { DeckViewModel } from 'src/app/shared/models/api';
import { AppEnvironment } from 'src/app/shared/models/app.environment';
import {
  cardBackFields,
  cardBackFieldsRequest,
  cardFrontFields,
  cardFrontFieldsRequest,
  SaveCardRequest,
  SaveDeckRequest,
} from 'src/app/shared/models/requests-api';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: [
    './cards.component.css',
    '../../shared/styles/style.css',
    '../../shared/styles/cardsAndDecks.css',
    '../../shared/styles/card.css',
  ],
})
export class CardsComponent implements OnInit {
  cardRequest: SaveCardRequest;
  deckRequest: SaveDeckRequest;

  frontFields: cardFrontFields;
  backFields: cardBackFields;
  // restrição: para cada valor de pontuação, este só pode aparecer em um deck
  // mock testing

  frontRequest: cardFrontFieldsRequest;
  backRequest: cardBackFieldsRequest;

  decks: DeckViewModel[];

  enableCardBack: boolean;

  typesOfFields: string[] = ['removable', 'required', 'inexistent'];

  constructor(
    private appService: AppService,
    private cardService: CardsService,
    private deckService: DecksService,
    private appEnvironment: AppEnvironment,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clear();
    this.loadDecks();

    // checkbox do capeta
    this.setCheckboxes();

    this.selectDeck(0);

    console.log('deck request', this.deckRequest);
    console.log('decks', this.decks[0]);

    this.enableCardBack =
      this.deckRequest.cardBackFields['title'].checked ||
      this.deckRequest.cardBackFields['answers'].checked ||
      this.deckRequest.cardBackFields['effect'].checked ||
      this.deckRequest.cardBackFields['cost'].checked ||
      this.deckRequest.cardBackFields['level'].checked ||
      this.deckRequest.cardBackFields['earning'].checked;

    console.log('any checked?', this.enableCardBack);
  }

  setCheckboxes() {
    this.frontFields = {
      title: {
        name: 'title',
        cardSide: 'front',
        checked: true,
        type: 'required',
      },
      art: {
        name: 'art',
        cardSide: 'front',
        checked: true,
        type: 'removable',
      },
      description: {
        name: 'description',
        cardSide: 'front',
        checked: true,
        type: 'required',
      },
      effect: {
        name: 'effect',
        cardSide: 'any',
        checked: true,
        type: 'removable',
      },
      cost: { name: 'cost', cardSide: 'any', checked: true, type: 'removable' },
      level: {
        name: 'level',
        cardSide: 'any',
        checked: true,
        type: 'removable',
      },
      earning: {
        name: 'earning',
        cardSide: 'any',
        checked: true,
        type: 'removable',
      },
    };

    this.backFields = {
      title: {
        name: 'title',
        cardSide: 'back',
        checked: false,
        type: 'removable',
      },
      answers: {
        name: 'answers',
        cardSide: 'back',
        checked: true,
        type: 'removable',
      },
      cost: {
        name: 'cost',
        cardSide: 'any',
        checked: false,
        type: 'removable',
      },
      level: {
        name: 'level',
        cardSide: 'any',
        checked: false,
        type: 'removable',
      },
      earning: {
        name: 'earning',
        cardSide: 'any',
        checked: false,
        type: 'removable',
      },
      effect: {
        name: 'effect',
        cardSide: 'any',
        checked: false,
        type: 'removable',
      },
    };

    // creating the mock deck
    var d: DeckViewModel = {
      id: 0,
      name: 'Deck de Desafios',
      type: 'Desafios',
      description: ' Deck de desafios',
      color: '#663030',
      cards: [],
      cardFrontFields: this.frontFields,
      cardBackFields: this.backFields,
    };

    // creating the mock deck
    var d2: DeckViewModel = {
      id: 1,
      name: 'Deck de Jogo',
      type: 'Jogo',
      description: ' Deck de Jogo',
      color: '#30665d',
      cards: [],
      cardFrontFields: this.frontFields,
      cardBackFields: this.backFields,
    };
    this.decks.push(d);
    this.decks.push(d2);
  }

  clear() {
    this.clearRequest();
  }

  clearRequest() {
    this.frontRequest = {
      art: '',
      cost: 0,
      description: '',
      earning: 0,
      effect: '',
      level: 0,
      title: '',
    };

    this.backRequest = {
      answers: '',
      cost: 0,
      earning: 0,
      effect: '',
      level: 0,
      title: '',
    };

    /////////////////////////
    this.cardRequest = {
      title: '',
      earning: 0,
      cost: 0,
      level: 0,
      description: '',
    };

    this.deckRequest = {
      cards: [],
      description: '',
      name: '',
      color: '#663030',
      cardFrontFields: null,
      cardBackFields: null,
    };

    this.decks = [];
  }

  loadDecks() {
    this.deckService.getDecks().subscribe(
      (decks) => {
        this.decks = decks;
        this.selectDeck(0);
      },
      (errors: Object) => {
        var msg: string[] = getErrors(errors);
        this.appService.setAppAlerts(
          msg.map((error) => ({ message: error, type: 'danger' }))
        );
      }
    );
  }

  saveCard() {
    var err = this.isValid();
    if (err) {
      this.appService.setAppAlerts(
        err.map((error) => ({ message: error, type: 'danger' }))
      );
      return;
    }
    this.cardService.saveCard(this.cardRequest).subscribe(
      () => {
        this.appService.setAppAlerts([{ message: 'Success', type: 'danger' }]);
      },
      (errors: Object) => {
        var msg: string[] = getErrors(errors);
        this.appService.setAppAlerts(
          msg.map((error) => ({ message: error, type: 'danger' }))
        );
      }
    );
  }

  isValid(): string[] {
    var errors: string[] = [];
    if (!this.cardRequest.title || this.cardRequest.title === '') {
      errors.push('Título inválido');
    }

    return errors.length > 0 ? errors : null;
  }

  selectDeck(deck: number) {
    if (!this.decks || this.decks.length <= 0 || this.decks.length <= deck)
      return;
    this.deckRequest = {
      cards: this.decks[deck].cards,
      description: this.decks[deck].description,
      name: this.decks[deck].name,
      color: this.decks[deck].color,
      cardFrontFields: this.decks[deck].cardFrontFields,
      cardBackFields: this.decks[deck].cardBackFields,
    };

    // if any of the deck fields are enabled
    if (this.enableCardBack) {
      for (var i = 0; i < this.decks.length; i++) {
        document.getElementById('deck-' + i).style.borderWidth = '0px';
      }
      document.getElementById('deck-' + deck).style.borderWidth = '5px';
    }
  }
}
