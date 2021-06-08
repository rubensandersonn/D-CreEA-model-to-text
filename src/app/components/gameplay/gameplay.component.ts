import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { Router } from "@angular/router";
// import { TweenLite, Draggable, TimelineMax } from "gsap/all";
import { TimelineMax } from "gsap";
import { AppService } from "src/app/services/app.service";
import { StatesService } from "src/app/services/states.service";
import { getErrors } from "src/app/shared/helpers/get-message-errors";
import { State } from "src/app/shared/models/api";
import { AppEnvironment } from "src/app/shared/models/app.environment";
// import { TimelineLite, Back, Power1 } from 'gsap';

@Component({
  selector: "app-gameplay",
  templateUrl: "./gameplay.component.html",
  styleUrls: ["./gameplay.component.css", "../../shared/styles/style.css"],
})
export class GameplayComponent implements OnInit {
  states: State[];
  editRule: boolean;
  innerHeight: number;

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  mouseX: number;
  mouseY: number;

  constructor(
    private appService: AppService,
    private stateService: StatesService,
    private appEnvironment: AppEnvironment,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setupCanvas();

    var rw = 100;
    var rh = 50;

    var x1 = 400;
    var y1 = 10;
    var x2 = 200;
    var y2 = 200;

    var cx1 = x1 + rw / 2;
    var cy1 = y1 + rh / 2;
    var cx2 = x2 + rw / 2;
    var cy2 = y2 + rh / 2;

    this.createRect(x1, y1, rw, rh);

    this.createRect(x2, y2, rw, rh);

    // line
    this.createLine(cx1, cy1, cx2, cy2);

    /////////////////
    this.innerHeight = window.innerHeight * 0.6;
    this.editRule = true;
    this.clear();
    this.loadStates();
  }

  dragElement(el: string, elx: number, ely: number) {
    document.getElementById(el).onmousemove = this.mouseMove;
    setInterval(() => this.moveElement(elx, ely), 100);
  }

  setupCanvas() {
    this.canvas = document.querySelector("canvas");
    this.canvas.height = window.innerHeight * 0.6;
    this.canvas.width = window.innerWidth * 0.92;

    this.ctx = this.canvas.getContext("2d");
  }

  createRect(x: number, y: number, w: number, h: number) {
    this.ctx.fillStyle = "#52a798";
    this.ctx.fillRect(x, y, w, h);
  }

  createLine(x1: number, y1: number, x2: number, y2: number) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 3;
    this.ctx.moveTo(x1, y1);
    this.ctx.bezierCurveTo(x1, y2, x2, y1, x2, y2);
    this.ctx.strokeStyle = "#232323";
    this.ctx.stroke();
  }

  ///////////////
  mouseMove(evt: MouseEvent) {
    this.mouseX = evt.clientX;
    this.mouseY = evt.clientY;
  }

  moveElement(elx, ely) {
    if (elx > this.mouseX) {
      elx -= 5;
    } else {
      elx += 5;
    }
    if (ely > this.mouseY) {
      ely -= 5;
    } else {
      ely += 5;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.beginPath();
    this.ctx.arc(elx, ely, 40, 0, 2 * Math.PI);
    this.ctx.fillStyle = "green";
    this.ctx.fill();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "red";
    this.ctx.stroke();
  }
  ///////////////

  clear() {
    this.states = [];
  }

  loadStates() {
    this.stateService.getStates().subscribe(
      (states) => {
        console.log("states", states);
        this.states = states;
      },
      (errors: Object) => {
        console.log("errou", errors);
        var msg: string[] = getErrors(errors);
        this.appService.setAppAlerts(msg.map((error) => ({ message: error, type: "danger" })));
      }
    );
  }

  ///////////////////

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

  ///////////////////
}
