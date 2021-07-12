import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { Router } from "@angular/router";
// import { TweenLite, Draggable, TimelineMax } from "gsap/all";
import { TimelineMax } from "gsap";
import { AppService } from "src/app/services/app.service";
import { GameService } from "src/app/services/game.service";
import { StateService } from "src/app/services/states.service";
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
  isMouseDown = false;

  gameId: string;

  rules = [
    [1, 2],
    [0, 2],
    [2, 3],
    [1, 0],
  ];
  edges = [];

  rectPoints = [new Point(500, 130), new Point(100, 100), new Point(300, 200), new Point(500, 300)];

  rects: Rectangle[] = [];
  lines: Line[] = [];

  constructor(
    private appService: AppService,
    private stateService: StateService,
    private gameService: GameService,
    private appEnvironment: AppEnvironment,
    private router: Router
  ) {}

  // rects must be setten before
  setEdges() {
    this.rules.forEach((el: number[]) => {
      this.edges.push([new Point(this.rects[el[0]].cx, this.rects[el[0]].cy), new Point(this.rects[el[1]].cx, this.rects[el[1]].cy)]);
    });

    console.log(this.rules.length);
  }

  ngOnInit(): void {
    this.setupDragNDrop();

    this.gameService.getGameId().subscribe((id) => {
      this.gameId = id;
    });

    /////////////////
    this.innerHeight = window.innerHeight * 0.6;
    this.editRule = true;
    this.clear();
    this.loadStates();
  }

  setupDragNDrop() {
    // setup canvas
    this.canvas = document.querySelector("canvas");
    this.canvas.height = window.innerHeight * 0.6;
    this.canvas.width = window.innerWidth * 0.92;
    // setup ctx
    this.ctx = this.canvas.getContext("2d");

    this.rectPoints.forEach((el, index) => {
      let r = new Rectangle(el.x, el.y, 100, 50, this.canvas, this.ctx, "State");
      this.rects.push(r);
    });

    this.setEdges();

    this.edges.forEach((el, index) => {
      let r = new Line(el[0].x, el[0].y, el[1].x, el[1].y, this.canvas, this.ctx, "label");
      this.lines.push(r);
    });

    this.drawAll();

    this.interact();
  }

  drawAll() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.lines.forEach((el, index) => {
      el.draw();
    });

    this.rects.forEach((elm, index) => {
      elm.draw();
    });
  }

  interact() {
    document.getElementById("canvas").onmousemove = (evt: MouseEvent) => this.mouseMove(evt);
    document.getElementById("canvas").onmousedown = (evt: MouseEvent) => this.mouseDown(evt);
    document.getElementById("canvas").onmouseup = (evt: MouseEvent) => this.mouseUp(evt);
    // setInterval(() => this.moveElement(elx, ely), 100);
  }

  ///////////////
  mouseMove(evt: MouseEvent) {
    this.mouseX = evt.clientX - 50;
    this.mouseY = evt.clientY - 176;

    if (this.isMouseDown) {
      console.log("is down", this.rects.length);
      this.rects.forEach((el) => {
        if (el.isTouching(this.mouseX, this.mouseY)) {
          console.log("is touching", el.text, this.mouseX, this.mouseY, evt.clientX, evt.clientY);
          el.update(this.mouseX, this.mouseY);
        }
      });
    }
    this.drawAll();
  }

  mouseDown(evt: MouseEvent) {
    this.isMouseDown = true;
    console.log("mouse down", this.mouseX, this.mouseY, this.isMouseDown);
    this.rects.forEach((el) => {
      if (el.isTouching(this.mouseX, this.mouseY)) {
        console.log("is touching", el.text, this.mouseX, this.mouseY, evt.clientX, evt.clientY);
        el.update(this.mouseX, this.mouseY);
      }
    });
  }

  mouseUp(evt: MouseEvent) {
    this.isMouseDown = false;
    console.log("mouse UP", this.mouseX, this.mouseY, this.isMouseDown);
  }

  ///////////////

  clear() {
    this.states = [];
  }

  loadStates() {
    this.stateService.getStates(this.gameId).subscribe(
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

abstract class GeoForm {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  cx: number;
  cy: number;
  width: number = 100;
  height: number = 50;
  text: string;
  color: string;
  backgroundColor: string;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    text: string,
    color?: string,
    backColor?: string
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.width = w;
    this.height = h;
    this.x = x - this.width / 2;
    this.y = y - this.height / 2;
    this.text = text;
    this.color = color != null ? color : "#707070";
    this.backgroundColor = backColor != null ? backColor : "#52a798";
    this.cx = x;
    this.cy = y;
  }

  abstract draw(): void;

  abstract isTouching(x: number, y: number): boolean;

  update = (x: number, y: number) => {
    if (x < this.width / 2 || x > this.canvas.width - this.width / 2 || y < this.height / 2 || y > this.canvas.height - this.height / 2) {
      return;
    }
    this.x = x - this.width / 2;
    this.y = y - this.height / 2;
  };
}

class Rectangle extends GeoForm {
  draw = () => {
    this.ctx.fillStyle = this.backgroundColor != null ? this.backgroundColor : "#52a798";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    // text in state
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.font = "15px Metropolis";
    this.ctx.fillText(this.text, this.cx, this.cy);
  };

  isTouching(x: number, y: number) {
    console.log("is it touching? (x, this.x, exp)", x, this.x, this.x + this.width);
    return (this.x <= x || x <= this.x + this.width) && (this.y <= y || y <= this.y + this.height);
  }
}

class Line extends GeoForm {
  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    text: string,
    color?: string,
    backColor?: string
  ) {
    super(x, y, w, h, canvas, ctx, text, color, backColor);
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;
    this.text = text;
    this.color = color != null ? color : "#707070";
    this.backgroundColor = backColor != null ? backColor : "#52a798";
    this.cx = x + this.width / 2;
    this.cy = y + this.height / 2;
  }
  draw = () => {
    this.ctx.fillStyle = this.backgroundColor != null ? this.backgroundColor : "#52a798";
    this.ctx.beginPath();
    this.ctx.lineWidth = 3;
    this.ctx.moveTo(this.x, this.y);
    this.ctx.bezierCurveTo(this.x, this.height, this.width, this.y, this.width, this.height);
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();
  };

  isTouching(x: number, y: number) {
    return false;
  }
}

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
