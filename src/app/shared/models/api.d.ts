export interface GDDViewModel{
    name: string;
    description: string;
    targetAudience: string;
    knowledgeField: string;
    requirements: string;
    minNumberPlayers: number;
    maxNumberPlayers: number;
}

export interface ConditionalRuleViewModel{

}

export interface TransitionRuleViewModel{

}

export interface Effect{
    targetActor: number;// - Ator alvo
    description: string;// - Descrição? / Lore?
    pros: string;// - [dev] pros? quão benéfico é usar esse efeito?
    cons: string;// - [dev] contras? quão maléfico é usar esse efeito?
    counters: string;// - [dev] counters?[] (lista opcional de regras ou efeitos que poderiam counterar esse efeito de alguma forma)
}

export interface EffectGameTurnPoints extends Effect{
    change: number;
}

export interface EffectGameResourcesPoints extends Effect{
    change: number; // positive or negative
}

export interface EffectCanPlay extends Effect{
    can: boolean;
    turns: number;
}

export interface Role {
    actor:Actor; // - Ator (tipo)
    pros: Effect;// - Pros (Efeito)
    cons: Effect;// - Contras (Efeito)
    counters: string;// - [dev] counters[]
}

export interface EffectChangeRole extends Effect{
    role: Role; // id
}

export interface EffectCanRole extends Effect{
    can:boolean;
    turns: number;
}

export interface Token {

}

export interface EffectChangeToken extends Effect{
    token:Token;
    turns: number;
}

export interface EffectCanToken extends Effect{
    can: boolean;
    turns: number;
}


export interface Actor {

}

export interface Condition {

}

export interface GameStatement {
    me: Actor;// - eu: *jogador testador*
    for: string;// - para que: *eu cumpra um desafio*
    given: string;// - dado que: *dado que eu tenho um carta de jogo na mão cujo tipo é X*
    when: Condition;// - quando: (condição -> and, or, not)
    //     - *eu combinar a minha carta do tipo X a uma carta desafio na mesa*
    //     - *a carta desafio contem nas respostas o tipo de carta X*
    then: string;// - então: *eu venci o desafio*
    otherwise: string;// - senão: *eu perdi o desafio*
}


export interface Rule {

}

export interface StatementRule extends Rule {
    gotoState: State; // state to go when this is used
    statement: GameStatement;
}

export interface TransitionRule extends Rule {
    gotoState: State; // state to go when this is used
}

export interface EffectRule extends Rule {
    gotoState: State; // state to go when this is used
    effect: Effect;
}

interface ifelse {
    condition: string;
    stateIfTrue: State;
}
export interface ConditionalRule extends Rule {
    case: ifelse; // state to go when the condition is true
    otherwise: State;
}

export interface State {

}

export interface Deck {
    nome: string; // - Nome
    type: string;// - Tipo
    description: string;// - Descrição?
    cartas: Card[];// - [dev] cartas[]
}

export interface Card {
    
}