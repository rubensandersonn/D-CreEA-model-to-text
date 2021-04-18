export interface GDDViewModel{
    name: string,
    description: string,
    targetAudience: string,
    knowledgeField: string,
    requirements: string,
    minNumberPlayers: number,
    maxNumberPlayers: number,
}

export interface ConditionalRuleViewModel{

}

export interface TransitionRuleViewModel{

}

export interface Effect{
    targetActor: number,// - Ator alvo
    description: string,// - Descrição? / Lore?
    pros: string,// - [dev] pros? quão benéfico é usar esse efeito?
    cons: string,// - [dev] contras? quão maléfico é usar esse efeito?
    counters: string// - [dev] counters?[] (lista opcional de regras ou efeitos que poderiam counterar esse efeito de alguma forma)
}