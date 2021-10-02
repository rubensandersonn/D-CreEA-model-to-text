import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { SummaryComponent } from "./pages/summary/summary.component";
import { DisclaimerComponent } from "./pages/disclaimer/disclaimer.component";
import { CardComponent } from "./components/card/card.component";
import { FooterComponent } from "./components/footer/footer.component";

export const PageComponents = {
  SummaryComponent,
  CardComponent,
  FooterComponent,
  DisclaimerComponent,
};

export const Pipes = {};

export const flattenPageComponents = [HomeComponent, SummaryComponent, CardComponent, FooterComponent, DisclaimerComponent];

export const commonComponents = [];

@NgModule({
  declarations: [],
  exports: [],
})
export class PipeModule {}
