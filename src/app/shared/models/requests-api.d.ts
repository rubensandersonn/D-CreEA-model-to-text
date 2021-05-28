import { Condition, Effect } from './api';

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
