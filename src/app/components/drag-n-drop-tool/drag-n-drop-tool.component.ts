import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { AppEnvironment } from 'src/app/shared/models/app.environment';

@Component({
  selector: 'app-drag-n-drop-tool',
  templateUrl: './drag-n-drop-tool.component.html',
  styleUrls: ['./drag-n-drop-tool.component.css']
})
export class DragNDropToolComponent implements OnInit {

  constructor(
    private appService: AppService, 
    private appEnvironment: AppEnvironment, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
