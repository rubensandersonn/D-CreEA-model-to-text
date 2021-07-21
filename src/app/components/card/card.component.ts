import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/services/app.service";
import { Card, Deck } from "src/app/shared/models/api";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: [
    "./card.component.css",
    "../../shared/styles/style.css",
    "../../shared/styles/cardsAndDecks.css",
    "../../shared/styles/card.css",
  ],
})
export class CardComponent implements OnInit {
  constructor(private appService: AppService, private router: Router) {}

  @Input("deck") d: Deck;
  @Input("card") card: Card;
  @Input("back") back: boolean;
  @Input("cardWidth") cardWidth: number = 250;
  @Input("marginBetwCards") marginBetwCards: number = 15;
  cardHeight: number;

  ngOnInit(): void {
    this.cardHeight = this.cardWidth * 1.72;
  }
}
