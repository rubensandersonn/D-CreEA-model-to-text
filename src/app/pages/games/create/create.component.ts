import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { GameCreationServiceService } from 'src/app/services/game-creation-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private gamesService: GameCreationServiceService, 
    private appService: AppService, 
    private router: Router) { }

  ngOnInit(): void {
  }

}
