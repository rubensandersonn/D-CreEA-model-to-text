import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { AppEnvironment } from 'src/app/shared/models/app.environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../shared/styles/style.css'],
})
export class HeaderComponent implements OnInit {
  activeMenu: number = -1;

  constructor(
    readonly appEnvironment: AppEnvironment,
    private appService: AppService
  ) {}

  ngOnInit() {}

  closeHamburger() {
    var headerHamburgerTrigger = document.getElementById(
      'main-container'
    ) as HTMLElement;
    headerHamburgerTrigger.classList.remove('open-hamburger-menu');
    headerHamburgerTrigger.classList.remove('open-overflow-menu');
  }
}
