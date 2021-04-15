import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./pages/games/create/create.component";

export const ROUTES: Routes = [
    { path: "games/create", component: CreateComponent}
];

export const AppRouting: ModuleWithProviders<RouterModule> = RouterModule.forRoot(ROUTES);
