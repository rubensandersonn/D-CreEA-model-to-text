import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { CardsService } from 'src/app/services/cards.service';
import { StatesService } from 'src/app/services/states.service';
import { getErrors } from 'src/app/shared/helpers/get-message-errors';
import { State } from 'src/app/shared/models/api';
import { AppEnvironment } from 'src/app/shared/models/app.environment';
import { SaveCardRequest } from 'src/app/shared/models/requests-api';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: [
    './deck.component.css',
    '../../shared/styles/style.css',
    '../../shared/styles/cardsAndDecks.css',
  ],
})
export class DeckComponent implements OnInit {
  cardRequest: SaveCardRequest;
  states: State[];

  constructor(
    private appService: AppService,
    private stateService: StatesService,
    private cardService: CardsService,
    private appEnvironment: AppEnvironment,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clear();
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
  }

  loadStates() {
    this.stateService.getStates().subscribe(
      (states) => {
        this.states = states;
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
}
