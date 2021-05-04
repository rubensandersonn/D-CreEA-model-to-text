import { NgModule } from "@angular/core"
import { CreateComponent } from "./pages/games/create/create.component"
import { HomeComponent } from "./pages/home/home.component"
import { GameDescriptionFormComponent } from './components/game-description-form/game-description-form.component';
import { RuleFormComponent } from './components/rule-form/rule-form.component';
import { DragNDropToolComponent } from './components/drag-n-drop-tool/drag-n-drop-tool.component';
import { StateComponent } from "./components/state/state.component";
import { ConditionalRuleComponent } from "./components/state/conditional-rule/conditional-rule.component";
import { TransitionRuleComponent } from "./components/state/transition-rule/transition-rule.component";
import { EffectRuleComponent } from "./components/state/effect-rule/effect-rule.component";
import { StatementRuleComponent } from "./components/state/statement-rule/statement-rule.component";

export const PageComponents = {
    CreateComponent,
    GameDescriptionFormComponent,
    RuleFormComponent,
    DragNDropToolComponent,
    StateComponent,
    ConditionalRuleComponent,
    TransitionRuleComponent,
    EffectRuleComponent,
    StatementRuleComponent
}

export const Pipes = {}

export const flattenPageComponents = [
    CreateComponent,
    HomeComponent,
    GameDescriptionFormComponent,
    RuleFormComponent,
    DragNDropToolComponent,
    StateComponent,
    ConditionalRuleComponent,
    TransitionRuleComponent,
    EffectRuleComponent,
    StatementRuleComponent
]

export const commonComponents = []

@NgModule({
    declarations:[],
    exports:[]
})
export class PipeModule {}