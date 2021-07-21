import { cardBackFields, cardFrontFields, clickableField } from "./requests-api";

export interface Effect {
  simpleEffect: string;
  toSelf?: boolean;
  toSpecific?: string;
  forever?: boolean;
  turns?: number;
  statusChange?: string; // - Descrição? / Lore?
  // pros: string; // - [dev] pros? quão benéfico é usar esse efeito?
  // cons: string; // - [dev] contras? quão maléfico é usar esse efeito?
  // counters: string;// - [dev] counters?[] (lista opcional de regras ou efeitos que poderiam counterar esse efeito de alguma forma)
}

export interface Condition {
  test: string;
  effectIfTrue: Effect;
  stateIfTrue: string; // states name
}

export interface ConditionalRule {
  id: string;
  label: string;
  conditions: Condition[]; // state to go when the condition is true
  failureCondition: Condition;
}

export interface EffectRule {
  id: string;
  label: string;
  effects: Effect[];
}

export interface StatementRule {
  id: string;
  label: string;
  simplerDescription: string;
  me?: string;
  to?: string;
  given?: string;
  when?: string;
  then?: string;
  otherwise?: string;
}

export interface State {
  id: string;
  label: string;
  conditionalRule: ConditionalRule;
  transition: string;
  effectRule: EffectRule;
  statementRules: StatementRule[];
}

//=====================

export interface Card {
  id: string;
  cardFront: CardFront;
  cardBack: CardBack;
}

export class CardFront {
  title: string;
  art: string;
  description: string;
  effect: string;
  cost: number;
  level: number;
  earning: number;
}

export class CardBack {
  title: string;
  answers: string;
  effect: string;
  cost: number;
  level: number;
  earning: number;
}

export interface Deck {
  id: string;
  name: string;
  description: string;
  color: string;
  cards: Card[];
  deckFront: DeckFront;
  deckBack: DeckBack;
}

export class DeckFront {
  title: boolean;
  art: boolean;
  description: boolean;
  effect: boolean;
  cost: boolean;
  level: boolean;
  earning: boolean;
}

export class DeckBack {
  title: boolean;
  answers: boolean;
  cost: boolean;
  level: boolean;
  earning: boolean;
  effect: boolean;
}

export interface Game {
  id: string;
  name: string;
  description: string;
  simplyGameplay: string;
  audience: string;
  knowledgeField: string;
  requirements: string;
  authors: string[];
  minNumberPlayers: number;
  maxNumberPlayers: number;
  decks: Deck[];
  states: State[];
}
