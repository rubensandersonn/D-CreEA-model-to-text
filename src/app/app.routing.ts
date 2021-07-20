import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DragNDropToolComponent } from "./components/drag-n-drop-tool/drag-n-drop-tool.component";
import { CreateComponent } from "./pages/games/create/create.component";
import { HomeComponent } from "./pages/home/home.component";
import { LobbyComponent } from "./pages/lobby/lobby.component";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "games/create", component: CreateComponent },
  { path: "games/drag", component: DragNDropToolComponent },
  { path: "games/lobby", component: LobbyComponent },
];

export const AppRouting: ModuleWithProviders<RouterModule> = RouterModule.forRoot(ROUTES);
