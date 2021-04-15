import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { AppRouting } from './app.routing';
import { GDFormDirective } from './components/gdform.directive';
import { GameDescriptionFormComponent } from './components/game-description-form/game-description-form.component';
import { TransitionRuleFormComponent } from './components/transition-rule-form/transition-rule-form.component';
import { ConditionalRuleFormComponent } from './components/conditional-rule-form/conditional-rule-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GDFormDirective,
    GameDescriptionFormComponent,
    TransitionRuleFormComponent,
    ConditionalRuleFormComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    MainModule,
    AppRouting
  ],
  providers: [
    // AppService,
    // AppEnvironment
  ],
  exports: [ClarityModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
