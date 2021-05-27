import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GameDescriptionFormComponent } from 'src/app/components/game-description-form/game-description-form.component';
import { GameplayComponent } from 'src/app/components/gameplay/gameplay.component';
import { AppService } from 'src/app/services/app.service';
import { GameCreationServiceService } from 'src/app/services/game-creation-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  
})
export class CreateComponent implements OnInit {
  
  innerHeight: number;
  // @ViewChild(GameDescriptionFormComponent)
  showGDDForm: boolean;
  showGameplayForm: boolean;
  showDecksForm: boolean;
  showCardsForm: boolean;
  showOverviewForm: boolean;

  game: any;

  constructor(
    private gamesService: GameCreationServiceService, 
    private appService: AppService, 
    private router: Router) { }

  ngOnInit(): void {
    this.onHideAll();
    this.game = {
      gdd: null,
      states: {
        initialState: null,
      },
      cards: []
    }
  }

  onShowGDDForm(){
    this.onHideAll();
    this.showGDDForm = true;
  }

  onShowGameplayForm(){
    this.onHideAll();
    this.showGameplayForm = true;
  }
  
  onShowDecksForm(){
    this.onHideAll();
    this.showDecksForm = true;
  }
  
  onShowOverviewForm(){
    this.onHideAll();
    this.showOverviewForm = true;
  }
  
  onShowCardsForm(){
    this.onHideAll();
    this.showCardsForm = true;
  }
  
  onHideAll(){
    this.showOverviewForm = false;
    this.showGDDForm = false;
    this.showCardsForm = false;
    this.showDecksForm = false;
    this.showGameplayForm = false;
  }
  
}
