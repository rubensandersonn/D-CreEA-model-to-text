import { ConditionalRule, Effect, EffectRule, Game, State, StatementRule } from "../shared/models/api";
import { gameModel } from "./model";

const game: Game = gameModel;

/**
 *
 * @param effect
 * @returns
 */
const writeEffect = (effect: Effect, level: string): string => {
  if (!effect) return "[error] effect not well formed";
  const st =
    level + effect.simpleEffect + ". In other words, apply this effect to " + effect.toSelf
      ? "Self player "
      : effect.toSpecific + " players: " + effect.statusChange + "; This effect lasts for " + effect.forever
      ? "the rest of this game"
      : effect.turns + "turns.";
  return st;
};

/**
 *
 * @param rule
 * @param level
 * @returns
 */
const writeEffectRule = (rule: EffectRule, level: string): string[] => {
  var lines = [];
  rule.effects.forEach((effect) => {
    if (effect.statusChange && effect.statusChange !== "") {
      lines.push(writeEffect(effect, level));
    }
  });

  return lines;
};

/**
 *
 * @param rules rules
 */
const writeStatementRule = (rules: StatementRule[], level: string): string[] => {
  var lines = [];

  const writeStatement = (rule: StatementRule): string => {
    if (!rule) return "[error] rule not well formed";
    var st = rule.me ? "me, as " + rule.me.toString() + "; " : "";
    st += rule.given ? "given that " + rule.given.toString() + "; " : "";
    st += rule.when ? "when " + rule.when.toString() + "; " : "";
    st += rule.then ? "then " + rule.then.toString() + "; " : "";
    st += rule.otherwise ? "otherwise " + rule.otherwise.toString() + ". " : "";
    return st;
  };

  rules.forEach((rule) => {
    lines.push(level + "- " + rule.simplerDescription);
    if (rule.when) {
      lines.push(level + "* a more detailed description: ");
      lines.push(level + writeStatement(rule));
    }
  });

  return lines;
};

/**
 *
 * @param rule
 * @param level
 * @returns
 */
const writeConditionalRule = (rule: ConditionalRule, level: string, pile: string[]): string[] => {
  var lines = [];
  rule.conditions.forEach((condition) => {
    lines.push(level + "If " + condition.test + " is true, then ");
    lines.push(writeEffect(condition.effectIfTrue, level));
    lines.push(level + "and go to state " + condition.stateIfTrue);
  });

  // go down on the tree
  rule.conditions.forEach((condition) => {
    const stName = condition.stateIfTrue;
    if (stName === "Check if game completed") {
      lines.push(level + "and ends in " + stName);
    } else {
      if (pile.includes(stName)) {
        //falls into an already visited path
        lines.push(level + "and follows as " + stName);
      } else {
        // go deeper
        const nextState = game.states.find((st) => st.label === stName)[0];
        lines.concat(followThePath(nextState, level, pile));
      }
    }
  });

  return lines;
};

/**
 *
 * @param state
 * @param level
 * @param pile
 * @returns
 */
const followThePath = (state: State, level: string, pile: string[]): string[] => {
  //checks if turn into a cycle
  if (pile.includes(state.label)) return [level + "and returns to state" + state.label];

  pile.push(state.label);
  var lines = [];
  lines.push("In state " + state.label);
  if (state.statementRules && state.statementRules.length > 0) {
    lines.concat(writeStatementRule(state.statementRules, level + "  "));
  }

  if (state.effectRule) {
    lines.concat(writeEffectRule(state.effectRule, level + "  "));
  }

  if (state.conditionalRule) {
    lines.concat(writeConditionalRule(state.conditionalRule, level + "  ", pile));
  } else {
    const nextState = game.states.find((st) => st.label === state.transition)[0];
    lines.concat(followThePath(nextState, level, pile));
  }

  return lines;
};

/**
 *
 * @param initialSt
 * @returns
 */
export const model2text = (initialSt: State) => {
  if (!initialSt) return;

  followThePath(initialSt, "", []);
};
