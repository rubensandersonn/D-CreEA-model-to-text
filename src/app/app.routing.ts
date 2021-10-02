import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DisclaimerComponent } from "./pages/disclaimer/disclaimer.component";
import { HomeComponent } from "./pages/home/home.component";
import { SummaryComponent } from "./pages/summary/summary.component";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "demo", component: SummaryComponent },
  { path: "disclaimer", component: DisclaimerComponent },
];

export const AppRouting: ModuleWithProviders<RouterModule> = RouterModule.forRoot(ROUTES);
