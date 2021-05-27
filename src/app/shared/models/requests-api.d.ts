export interface CreateTransitionRuleRequest {
    label: string;
    fromState: number;
    toState: number;
}

export interface CreateStatementRuleRequest {
    gotoState: number;
    label: string;
    me: number; // actor
    to?: string;
    given: number[]; // statements
    otherwise: number[]; // statements
    simplerDescription: string; // statements
    when: number[]; // statements
    then: number[]; // statements
    fromState: number;
}