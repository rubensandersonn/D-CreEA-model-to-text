import { Card, Condition, DeckField, Effect } from './api';

export interface CreateTransitionRuleRequest {
  label: string;
  fromState: number;
  toState: number;
}

export interface CreateConditionalRuleRequest {
  otherwise: string;
  label: string;
  conditions: Condition[];
  fromState: string;
}

export interface CreateEffectRuleRequest {
  label: string;
  fromState: string;
  effects: Effect[];
  toState: string;
}

export interface CreateStatementRuleRequest {
  gotoState: number;
  label: string;
  me: number; // actor
  to?: string;
  given: string; // statements
  otherwise: string; // statements
  simplerDescription: string; // statements
  when: string; // statements
  then: string; // statements
  fromState: number;
}

export interface SaveCardRequest {
  title: string;
  earning: number;
  cost: number;
  level: number;
  description: string;
}

export interface SaveDeckRequest {
  name: string;
  description: string;
  cards: Card[];
  color: string;
  selectableFrontFields: clickableField[];
  selectableBackFields: clickableField[];
}

export class clickableField {
  name: string;
  checked: boolean;
  type: string;
  cardSide: string;
}
