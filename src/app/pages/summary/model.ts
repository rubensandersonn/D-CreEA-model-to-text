import { Game } from "src/app/shared/models/api";
import { challengeCards, gameCards } from "./cardModel";

export const gameModel: Game = {
  id: "z",
  audience: "computer science students",
  authors: ["Rubens Silva"],
  description: "A game to practice software testing",
  simplyGameplay:
    "In this game, the players must resolve challenges by combining types of software testing with software application scenarios. The objective is to choose the type of test that best suits the software scenario",
  knowledgeField: "Software Testing",
  maxNumberPlayers: 7,
  minNumberPlayers: 3,
  name: "GreaTest Card Game",
  requirements: "Software testing types",
  decks: [
    {
      id: "98",
      cards: challengeCards,
      color: "#663030",
      name: "Challenges Deck",
      description: "This deck has all the challenges of this game. Each challenge is a software use description",
      deckFront: {
        title: true,
        art: true,
        description: true,
        effect: false,
        cost: false,
        level: false,
        earning: false,
      },
      deckBack: {
        title: false,
        answers: true,
        effect: false,
        cost: false,
        level: false,
        earning: false,
      },
    },
    {
      id: "99",
      cards: gameCards,
      color: "#30665d",
      name: "Game Deck",
      description: "This deck has the types of software testing, e.g., Unit Test, Usability Test",
      deckFront: {
        title: true,
        art: true,
        description: true,
        effect: false,
        cost: false,
        level: false,
        earning: false,
      },
      deckBack: {
        title: false,
        answers: false,
        effect: false,
        cost: false,
        level: false,
        earning: false,
      },
    },
    {
      id: "999",
      cards: gameCards,
      color: "#613d61",
      name: "Bonus Deck",
      description: "This deck has all bonus cards. Every bonus card has an effect",
      deckFront: {
        title: true,
        art: true,
        description: true,
        effect: false,
        cost: false,
        level: false,
        earning: false,
      },
      deckBack: {
        title: false,
        answers: false,
        effect: false,
        cost: false,
        level: false,
        earning: false,
      },
    },
  ],
  states: [
    {
      id: "1",
      purpose: "sets the begining of the game",
      label: "Game Start",
      conditionalRule: null,
      effectRule: null,
      statementRules: [],
      transition: "Game Setup",
    },
    {
      id: "2",
      purpose: "sets the setup of every begining of a game",
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
      purpose: "sets the setup of every begining of a turn",
      label: "Turn setup",
      conditionalRule: null,
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
      transition: "Play or next player",
    },
    {
      id: "3.1",
      purpose: "Decides what is the play",
      label: "Play or next player",
      conditionalRule: {
        id: "b",
        label: "Choose next play",
        conditions: [
          {
            test: "the player of the turn has not tried a challenge yet",
            effectIfTrue: {
              simpleEffect: "S/he can play a challenge",
            },
            stateIfTrue: "Play a challenge",
          },
          {
            test: "the player of the turn has not tried to bargain",
            effectIfTrue: {
              simpleEffect: "S/he can try to negotiate with other players",
            },
            stateIfTrue: "Do a bargain",
          },
          {
            test: "the player of the turn has not used a Bonus Card effect",
            effectIfTrue: {
              simpleEffect: "S/he can use it",
            },
            stateIfTrue: "Bonus play",
          },
        ],
        failureCondition: {
          test: "can't do any play",
          effectIfTrue: {
            simpleEffect: "pass the turn to next player",
          },
          stateIfTrue: "Turn setup",
        },
      },
      effectRule: null,
      statementRules: null,
      transition: null,
    },
    {
      id: "4",
      purpose: "Describes the way to resolve a challenge",
      label: "Play a challenge",
      conditionalRule: {
        id: "e",
        label: "play a challenge",
        conditions: [
          {
            test: "the player beats the challenge AND the dice throw shows a number present in the answers",
            effectIfTrue: {
              simpleEffect: "S/he wins the challenge",
            },
            stateIfTrue: "Update status: success",
          },
          {
            test: "the player beats the challenge but the dice throw shows a number NOT present in the answers",
            effectIfTrue: {
              simpleEffect: "S/he wins the challenge",
            },
            stateIfTrue: "Play or next player",
          },
        ],
        failureCondition: {
          test: "the player used a game card that DO NOT answers correctly the challenge",
          effectIfTrue: {
            simpleEffect: "S/he looses the challenge",
          },
          stateIfTrue: "Update status: failure",
        },
      },
      effectRule: null,
      statementRules: [
        {
          id: "g1",
          label: "rule 8.1",
          simplerDescription: "The player combines 1 Game Card with 1 Challenge Card to make it's play",
        },
        {
          id: "g1",
          label: "rule 8.1",
          simplerDescription:
            "the player beats the challenge if S/He uses a game card that answers correctly the challenge card that s/he chose from table",
        },
        {
          id: "g1",
          label: "rule 8.1",
          simplerDescription: "the player throw the dice if S/He beats the challenge",
        },
      ],
      transition: null,
    },
    {
      id: "10",
      purpose: "Negotiate with another player",
      label: "Do a bargain",
      conditionalRule: null,
      effectRule: null,
      statementRules: [
        {
          id: "c",
          label: "rule 6",
          simplerDescription: "the player can offer card to trade. This negotiation is made in front of all other players",
        },
      ],
      transition: "Play or next player",
    },
    {
      id: "11",
      purpose: "To use the effect of a Bonus card",
      label: "Bonus play",
      conditionalRule: null,
      effectRule: null,
      statementRules: [
        {
          id: "c",
          label: "rule 6",
          simplerDescription: "the player can use a Bonus Card if S/He has",
        },
      ],
      transition: "Play or next player",
    },
    {
      id: "5",
      purpose: "Describes the way to change the points in case of win a challenge",
      label: "Update status: success",
      conditionalRule: null,
      effectRule: null,
      statementRules: [
        {
          id: "h",
          label: "st rule 3",
          simplerDescription: "the player earns +1 victory point",
        },
        {
          id: "h",
          label: "st rule 3",
          simplerDescription: "the player draws a card from the Deck Bonus to it's hand",
        },
      ],
      transition: "Check if game completed",
    },
    {
      id: "6",
      purpose: "Describes the way to change the points in case of miss a challenge",
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
      transition: "Play or next player",
    },
    {
      id: "7",
      purpose: "if someone won, the game must end",
      label: "Check if game completed",
      conditionalRule: {
        id: "j",
        label: "end game condition",
        conditions: [
          {
            test: "any player achieved 7 victory points",
            effectIfTrue: {
              simpleEffect: "S/he wins the game",
            },
            stateIfTrue: "Game Over",
          },
        ],
        failureCondition: {
          test: "no player achieved 7 victory points yet",
          effectIfTrue: {
            simpleEffect: "next player",
          },
          stateIfTrue: "Play or next player",
        },
      },
      effectRule: null,
      statementRules: [],
      transition: null,
    },
    {
      id: "-1",
      purpose: "The end of the game. Lets see the winners",
      label: "Game Over",
      conditionalRule: null,
      effectRule: null,
      statementRules: [],
      transition: null,
    },
  ],
};
