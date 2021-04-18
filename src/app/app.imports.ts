import { NgModule } from "@angular/core"
import { CreateComponent } from "./pages/games/create/create.component"
import { HomeComponent } from "./pages/home/home.component"
import { GameDescriptionFormComponent } from './components/game-description-form/game-description-form.component';
import { TransitionRuleFormComponent } from './components/transition-rule-form/transition-rule-form.component';
import { ConditionalRuleFormComponent } from './components/conditional-rule-form/conditional-rule-form.component';
import { DragNDropToolComponent } from './components/drag-n-drop-tool/drag-n-drop-tool.component';

export const PageComponents = {
    CreateComponent,
    GameDescriptionFormComponent,
    TransitionRuleFormComponent,
    ConditionalRuleFormComponent,
    DragNDropToolComponent
}

export const Pipes = {}

export const flattenPageComponents = [
    CreateComponent,
    HomeComponent,
    GameDescriptionFormComponent,
    TransitionRuleFormComponent,
    ConditionalRuleFormComponent,
    DragNDropToolComponent
]

export const commonComponents = []

@NgModule({
    declarations:[],
    exports:[]
})
export class PipeModule {}