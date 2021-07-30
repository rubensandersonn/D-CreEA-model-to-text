import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { SummaryComponent } from "./pages/summary/summary.component";
import { CardComponent } from "./components/card/card.component";

export const PageComponents = {
  SummaryComponent,
  CardComponent,
};

export const Pipes = {};

export const flattenPageComponents = [HomeComponent, SummaryComponent, CardComponent];

export const commonComponents = [];

@NgModule({
  declarations: [],
  exports: [],
})
export class PipeModule {}
