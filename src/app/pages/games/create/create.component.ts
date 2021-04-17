import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DragNDropToolComponent } from 'src/app/components/drag-n-drop-tool/drag-n-drop-tool.component';
import { GameDescriptionFormComponent } from 'src/app/components/game-description-form/game-description-form.component';
import { AppService } from 'src/app/services/app.service';
import { GameCreationServiceService } from 'src/app/services/game-creation-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  
})
export class CreateComponent implements OnInit {

  // @ViewChild(GameDescriptionFormComponent)
  showGDDForm: boolean;

  constructor(
    private gamesService: GameCreationServiceService, 
    private appService: AppService, 
    private router: Router) { }

  ngOnInit(): void {
    this.onHideAll();
  }

  onShowGDDForm(){
    this.onHideAll();
    this.showGDDForm = true;
  }

  onHideAll(){
    this.showGDDForm = false;
  }

}
