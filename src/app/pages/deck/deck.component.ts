import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { CardsService } from 'src/app/services/cards.service';
import { DecksService } from 'src/app/services/deck.service';
import { StatesService } from 'src/app/services/states.service';
import { getErrors } from 'src/app/shared/helpers/get-message-errors';
import { DeckViewModel, State } from 'src/app/shared/models/api';
import { AppEnvironment } from 'src/app/shared/models/app.environment';
import { ColorPickerModule } from 'ngx-color-picker';
import {
  clickableField,
  SaveCardRequest,
  SaveDeckRequest,
} from 'src/app/shared/models/requests-api';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: [
    './deck.component.css',
    '../../shared/styles/style.css',
    '../../shared/styles/cardsAndDecks.css',
    '../../shared/styles/card.css',
  ],
})
export class DeckComponent implements OnInit {
  cardRequest: SaveCardRequest;
  deckRequest: SaveDeckRequest;

  states: State[];
  selectableFrontFields: clickableField[];
  selectableBackFields: clickableField[];
  // restrição: para cada valor de pontuação, este só pode aparecer em um deck
  // mock testing

  decks: DeckViewModel[];

  typesOfFields: string[] = ['removable', 'required', 'inexistent'];

  constructor(
    private appService: AppService,
    private stateService: StatesService,
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
  }
  setCheckboxes() {
    this.selectableFrontFields = [
      { name: 'title', cardSide: 'front', checked: true, type: 'required' },
      { name: 'art', cardSide: 'front', checked: false, type: 'removable' },
      {
        name: 'description',
        cardSide: 'front',
        checked: true,
        type: 'required',
      },
      { name: 'effect', cardSide: 'any', checked: false, type: 'removable' },
      { name: 'cost', cardSide: 'any', checked: false, type: 'removable' },
      { name: 'level', cardSide: 'any', checked: false, type: 'removable' },
      { name: 'value', cardSide: 'any', checked: false, type: 'removable' },
    ];
    this.selectableBackFields = [
      { name: 'title', cardSide: 'back', checked: false, type: 'removable' },
      { name: 'answers', cardSide: 'back', checked: true, type: 'required' },
      { name: 'cost', cardSide: 'any', checked: false, type: 'removable' },
      { name: 'level', cardSide: 'any', checked: false, type: 'removable' },
      { name: 'value', cardSide: 'any', checked: false, type: 'removable' },
      { name: 'effect', cardSide: 'any', checked: false, type: 'removable' },
    ];

    // creating the mock deck
    var d: DeckViewModel = {
      id: 0,
      name: 'Deck de Desafios',
      type: 'Desafios',
      description: ' Deck de desafios',
      color: '#663030',
      cards: [],
      selectableFrontFields: this.selectableFrontFields,
      selectableBackFields: this.selectableBackFields,
    };

    // creating the mock deck
    var d2: DeckViewModel = {
      id: 1,
      name: 'Deck de Jogo',
      type: 'Jogo',
      description: ' Deck de Jogo',
      color: '#30665d',
      cards: [],
      selectableFrontFields: this.selectableFrontFields,
      selectableBackFields: this.selectableBackFields,
    };
    this.decks.push(d);
    this.decks.push(d2);
  }

  clear() {
    this.clearRequest();
    this.clearStates();
  }

  clearStates() {
    this.states = [];
  }

  clearRequest() {
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
      selectableFrontFields: [],
      selectableBackFields: [],
    };

    this.decks = [];
  }

  loadDecks() {
    this.deckService.getDecks().subscribe(
      (decks) => {
        this.decks = decks;
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
      selectableFrontFields: this.decks[deck].selectableFrontFields,
      selectableBackFields: this.decks[deck].selectableBackFields,
    };
  }
}
