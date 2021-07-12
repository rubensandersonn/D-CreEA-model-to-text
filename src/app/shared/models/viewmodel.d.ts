import { cardBackFields, cardFrontFields } from "./requests-api";

export interface DeckViewModel {
  id: string;
  name: string;
  type: string;
  description: string;
  color: string;
  cardFrontFields: cardFrontFields;
  cardBackFields: cardBackFields;
}
