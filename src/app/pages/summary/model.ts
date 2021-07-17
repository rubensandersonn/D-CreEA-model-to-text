import { Game } from "src/app/shared/models/api";

export const gameModel: Game = {
  id: "z",
  audience: "computer science students",
  authors: ["Rubens Silva"],
  description: "A game to practice software testing",
  knowledgeField: "Software Testing",
  maxNumberPlayers: 7,
  minNumberPlayers: 3,
  name: "GreaTest Card Game",
  requirements: "Software testing types",
  decks: [],
  states: [
    {
      id: "1",
      label: "Game Start",
      conditionalRule: null,
      effectRule: null,
      statementRules: [],
      transition: "Game Setup",
    },
    {
      id: "2",
      label: "Game Setup",
      conditionalRule: null,
      effectRule: null,
      statementRules: [
        {
          id: "a",
          label: "st rule 1",
          simplerDescription: "all players draw 5 cards from game deck",
        },
        {
          id: "a",
          label: "st rule 2",
          simplerDescription: "chose random player to start",
        },
      ],
      transition: "Turn setup",
    },
    {
      id: "3",
      label: "Turn setup",
      conditionalRule: {
        id: "b",
        label: "Choose next play",
        conditions: [
          {
            test: "the player of the turn has not played yet",
            effectIfTrue: {
              simpleEffect: "S/he can play a challenge",
            },
            stateIfTrue: "Play a challenge",
          },
        ],
        failureCondition: {
          test: "can't do any play",
          effectIfTrue: {
            simpleEffect: "pass turn to next player",
          },
          stateIfTrue: "Turn setup",
        },
      },
      effectRule: null,
      statementRules: [
        {
          id: "c",
          label: "rule 6",
          simplerDescription: "the player of the turn draws 1 card from game deck",
        },
        {
          id: "d",
          label: "rule 5",
          simplerDescription: "the table is filled with 5 challenge cards, if not already",
        },
      ],
      transition: null,
    },
    {
      id: "4",
      label: "Play a challenge",
      conditionalRule: {
        id: "e",
        label: "play a challenge",
        conditions: [
          {
            test: "the player used a game card that answers correctly the challenge card that s/he chose from table",
            effectIfTrue: {
              simpleEffect: "S/he wins the challenge",
            },
            stateIfTrue: "Update status: success",
          },
        ],
        failureCondition: {
          test: "the player used a game card that DO NOT answers correctly the challenge",
          effectIfTrue: {
            simpleEffect: "S/he loose the challenge",
          },
          stateIfTrue: "Update status: failure",
        },
      },
      effectRule: null,
      statementRules: [
        {
          id: "f",
          label: "rule 7",
          simplerDescription: "the player of the turn draws 1 card from game deck",
        },
        {
          id: "g",
          label: "rule 8",
          simplerDescription: "the table is filled with 5 challenge cards, if not already",
        },
      ],
      transition: null,
    },
    {
      id: "5",
      label: "Update status: success",
      conditionalRule: null,
      effectRule: null,
      statementRules: [
        {
          id: "h",
          label: "st rule 3",
          simplerDescription: "the player earns +1 victory point",
        },
      ],
      transition: "Check if game completed",
    },
    {
      id: "6",
      label: "Update status: failure",
      conditionalRule: null,
      effectRule: null,
      statementRules: [
        {
          id: "i",
          label: "rule",
          simplerDescription: "there is no penalties for loosing",
        },
      ],
      transition: "Check if game completed",
    },
    {
      id: "7",
      label: "Check if game completed",
      conditionalRule: {
        id: "j",
        label: "end game condition",
        conditions: [
          {
            test: "any player achieved 5 victory points",
            effectIfTrue: {
              simpleEffect: "S/he wins the game",
            },
            stateIfTrue: "Game over",
          },
        ],
        failureCondition: {
          test: "no player achieved 5 victory points yet",
          effectIfTrue: {
            simpleEffect: "next player",
          },
          stateIfTrue: "Play again or next player",
        },
      },
      effectRule: null,
      statementRules: [],
      transition: null,
    },
    {
      id: "8",
      label: "Play again or next player",
      conditionalRule: {
        id: "k",
        label: "play again",
        conditions: [
          {
            test: "not all play possibilities were used",
            effectIfTrue: {
              simpleEffect: "S/he wins the game",
            },
            stateIfTrue: "Game over",
          },
        ],
        failureCondition: {
          test: "no player achieved 5 victory points yet",
          effectIfTrue: {
            simpleEffect: "next player",
          },
          stateIfTrue: "Play again or next player",
        },
      },
      effectRule: null,
      statementRules: [],
      transition: null,
    },
    {
      id: "-1",
      label: "Game Over",
      conditionalRule: null,
      effectRule: null,
      statementRules: [],
      transition: null,
    },
  ],
};
