import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { AppEnvironment } from 'src/app/shared/models/app.environment';
// import { TimelineLite, Back, Power1 } from 'gsap';

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
  }

  ngAfterViewInit() {}

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

  // createDragables() {
  //   var star = document.querySelector('#star');
  //   var markerDef = document.querySelector('defs .marker');
  //   var handleDef = document.querySelector('defs .handle');
  //   var markerLayer = document.querySelector('#marker-layer');
  //   var handleLayer = document.querySelector('#handle-layer');

  //   var points = [];
  //   var numPoints = star.points.numberOfItems;

  //   for (var i = 0; i < numPoints; i++) {
  //     var point = star.points.getItem(i);
  //     points[i] = { x: point.x, y: point.y };
  //     createHandle(point);
  //   }

  //   TweenLite.set('#svg', { autoAlpha: 1 });

  //   function createHandle(point) {
  //     var marker = createClone(markerDef, markerLayer, point);
  //     var handle = createClone(handleDef, handleLayer, point);

  //     var draggable = new Draggable(handle, {
  //       throwProps: true,
  //       onDrag: moveAction,
  //       onThrowUpdate: moveAction,
  //       throwResistance: 5000,
  //       liveSnap: {
  //         points: points,
  //         radius: 10,
  //       },
  //       snap: {
  //         points: points,
  //         radius: 50,
  //       },
  //     });

  //     function moveAction() {
  //       point.x = this.x;
  //       point.y = this.y;
  //     }
  //   }

  //   function createClone(node, parent, point) {
  //     var element = node.cloneNode(true);
  //     parent.appendChild(element);
  //     TweenLite.set(element, { x: point.x, y: point.y });
  //     return element;
  //   }
  // }
}
