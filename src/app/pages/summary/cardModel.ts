import { Card } from "src/app/shared/models/api";

export const gameCards: Card[] = [
  {
    _id: "c1",
    deck: null,
    repetitions: 1,
    cardFront: {
      title: "Functional Test",
      art: "",
      description: "Functional testing is a type of testing that bases its test cases on the specifications of the software component ",
      effect: "",
      cost: 99,
      level: 99,
      earning: 99,
    },
    cardBack: {
      title: "Card Title 1",
      answers: "Card answers 1",
      effect: "Card effect 1",
      cost: 99,
      level: 99,
      earning: 99,
    },
  },
];

export const challengeCards: Card[] = [
  {
    _id: "c2",
    repetitions: 1,
    deck: null,
    cardFront: {
      title: "Case 1",
      art: "",
      description: "A user tries to search for a friend on the system but the result is don't correspond",
      effect: "",
      cost: 99,
      level: 99,
      earning: 99,
    },
    cardBack: {
      title: "Card Answers",
      answers: "Functional Test - 1 to 3",
      effect: "",
      cost: 99,
      level: 99,
      earning: 99,
    },
  },
];
