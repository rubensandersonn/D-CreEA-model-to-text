import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./pages/games/create/create.component";
import { HomeComponent } from "./pages/home/home.component";

export const ROUTES: Routes = [
    { path: "", component: HomeComponent},
    { path: "games/create", component: CreateComponent}
];

export const AppRouting: ModuleWithProviders<RouterModule> = RouterModule.forRoot(ROUTES);
