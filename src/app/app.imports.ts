import { NgModule } from "@angular/core"
import { CreateComponent } from "./pages/games/create/create.component"

export const PageComponents = {CreateComponent}

export const Pipes = {}

export const flattenPageComponents = [
    CreateComponent
]

export const commonComponents = []

@NgModule({
    declarations:[],
    exports:[]
})
export class PipeModule {}