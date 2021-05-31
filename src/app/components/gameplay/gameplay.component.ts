import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { AppEnvironment } from 'src/app/shared/models/app.environment';
import { LeaderLine } from 'leader-line';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.css', '../../shared/styles/style.css'],
})
export class GameplayComponent implements OnInit {
  editRule: boolean;
  innerHeight: number;

  constructor(
    private appService: AppService,
    private appEnvironment: AppEnvironment,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.innerHeight = window.innerHeight * 0.6;
    this.editRule = true;

    this.buildDragables();
  }

  ngAfterViewInit() {}

  buildDragables() {
    var line = new LeaderLine(
      document.getElementById('start'),
      document.getElementById('end'),
      { color: 'red', size: 8 }
    );
  }

  showRuleForm() {
    this.hideAllForms();
    this.editRule = true;
  }

  hideAllForms() {
    this.editRule = false;
  }

  setState() {
    this.editRule = true;
  }
}
