import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { GddService } from 'src/app/services/gdd.service';
import { GDDViewModel } from 'src/app/shared/models/api';
import { AppEnvironment } from 'src/app/shared/models/app.environment';

@Component({
  selector: 'app-game-description-form',
  templateUrl: './game-description-form.component.html',
  styleUrls: ['./game-description-form.component.css']
})
export class GameDescriptionFormComponent implements OnInit {

  gdd: GDDViewModel;

  constructor(
    private gddService: GddService, 
    private appService: AppService, 
    private appEnvironment: AppEnvironment, 
    private router: Router) { }

  ngOnInit(): void {
    this.initGDD();
  }

  initGDD(){
    this.gdd = {
      name: "",
      description: "",
      targetAudience: "",
      knowledgeField: "",
      requirements: "",
      minNumberPlayers: 0,
      maxNumberPlayers: 0,
    }
  }

  setGDD(){
    this.gddService.setGDD(this.gdd).subscribe(()=>{
      this.appService.setAppAlerts([{message:"Success", type: "success"}]);
    },(erros: string[])=>{
      this.appService.setAppAlerts(erros.map(error=> ({message: error, type: "danger"})));
    });
  }

}
