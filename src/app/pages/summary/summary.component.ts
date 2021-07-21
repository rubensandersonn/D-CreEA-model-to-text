import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CardComponent } from "src/app/components/card/card.component";
import { AppService } from "src/app/services/app.service";
import { Card, ConditionalRule, Effect, EffectRule, Game, State, StatementRule } from "src/app/shared/models/api";
import { gameModel } from "./model";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: [
    "./summary.component.css",
    "../../shared/styles/style.css",
    "../../shared/styles/cardsAndDecks.css",
    "../../shared/styles/card.css",
  ],
})
export class SummaryComponent implements OnInit {
  game: Game = gameModel;
  ruleLines: string[] = [];
  cardDefault: Card;
  isBack: boolean = false;

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.createRules();
    this.game.simplyGameplay;
    this.cardDefault = {
      id: null,
      cardFront: {
        title: "Card Title",
        art: "Card art",
        description: "Card description",
        effect: "Card effect",
        cost: 99,
        level: 99,
        earning: 99,
      },
      cardBack: {
        title: "Card Title",
        answers: "Card answers",
        effect: "Card effect",
        cost: 99,
        level: 99,
        earning: 99,
      },
    };
  }

  findState(label: string) {
    return this.game.states.find((x) => x.label.toLowerCase() === label.toLowerCase());
  }

  createRules() {
    const initialState = this.findState("game start"); // set this to fix
    if (!initialState) console.log("initial not found");
    this.ruleLines = this.model2text(initialState);
    console.log("result", this.ruleLines);
  }

  /**
   *
   * @param effect
   * @returns
   */
  writeEffect = (effect: Effect, level: string): string => {
    if (!effect) return "[error] effect not well formed";
    var st = effect.simpleEffect;
    if (effect.statusChange) {
      st += `. In other words, apply '${effect.statusChange}' to `;
      st += effect.toSelf != null && effect.toSelf == true ? "self player;" : `players ${effect.toSpecific};`;
      st += ` This effect lasts for ${
        effect.forever != null && effect.forever == true ? "the rest of this game" : effect.turns + " turns."
      }`;
    }

    return st;
  };

  /**
   *
   * @param rule
   * @param level
   * @returns
   */
  writeEffectRule = (rule: EffectRule, level: string): string[] => {
    var lines = [];
    rule.effects.forEach((effect) => {
      if (effect.statusChange && effect.statusChange !== "") {
        lines.push(this.writeEffect(effect, level));
      }
    });

    return lines;
  };

  /**
   *
   * @param rules rules
   */
  writeStatementRule = (rules: StatementRule[], level: string): string[] => {
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
  writeConditionalRule = (rule: ConditionalRule, level: string, stack: string[]): string[] => {
    var lines = [];

    // writing the conditions
    rule.conditions.forEach((condition) => {
      lines.push(
        level +
          "- If " +
          condition.test +
          ", then " +
          this.writeEffect(condition.effectIfTrue, level) +
          ". With this, go to step '" +
          condition.stateIfTrue +
          "'"
      );
    });

    // writing the failure test
    lines.push(
      level +
        "- If previous tests fails, then " +
        this.writeEffect(rule.failureCondition.effectIfTrue, level) +
        ". With this, go to step '" +
        rule.failureCondition.stateIfTrue +
        "'"
    );

    return lines;
  };

  /**
   *
   * @param state
   * @param level
   * @param stack
   * @returns
   */
  followThePath = (state: State, level: string, stack: string[]): string[] => {
    //checks if turn into a cycle
    if (!state) return ["ERROR: state not set"];
    if (state.label.toLowerCase() === "game over") return [". With this, we have the end of game!"];
    if (stack.includes(state.label)) return [level + "and returns to state" + state.label];

    stack.push(state.label);

    var lines: string[] = [];

    // begin of coding the line
    lines.push(`At '${state.label}'`);

    // statement rules
    if (state.statementRules && state.statementRules.length > 0) {
      lines[0] += ", we have the following rules:";

      const r = this.writeStatementRule(state.statementRules, level + "  ");
      lines = lines.concat(r);
    }

    // effect rules
    if (state.effectRule) {
      if (!lines[0].includes(", we have the following rules:")) lines[0] += ", we have the following rules:";

      lines = lines.concat(this.writeEffectRule(state.effectRule, level + "  "));
      // lines = lines.concat(["effect rules"]);
    }

    // conditional rules
    if (state.conditionalRule) {
      // formating the text
      if (!lines[0].includes(", we have the following rules:")) lines[0] += ", we have the following rules:";

      //writing the conditions as width search
      lines = lines.concat(this.writeConditionalRule(state.conditionalRule, level + "  ", stack));

      // go down on each condition
      state.conditionalRule.conditions.forEach((condition) => {
        const nextStateLabel = condition.stateIfTrue;

        console.log(`next state: ${nextStateLabel}`);
        if (nextStateLabel === "Check if game completed") {
          lines.push(level + "and ends in " + nextStateLabel);
        } else {
          var alreadyVisited = false;

          for (var st in stack) {
            if (st.toLowerCase() === nextStateLabel.toLowerCase()) {
              lines.push(level + "and follows as " + nextStateLabel);
              alreadyVisited = true;
              break;
            }
          }

          if (!alreadyVisited) {
            // go deeper
            const nextState = this.findState(nextStateLabel);
            if (!nextState) return [`ERROR: state ${nextStateLabel} not found at condition in level ${level}`];
            console.log(`going down at ${nextState.label}`);
            console.log("stack", stack);
            lines = lines.concat(this.followThePath(nextState, level, stack));
          }
        }
      });

      // failure condition going deeper
      const nextStateLabel = state.conditionalRule.failureCondition.stateIfTrue;
      if (nextStateLabel === "Check if game completed") {
        lines.push(level + "and ends in " + nextStateLabel);
      } else {
        var alreadyVisited = false;

        for (var st in stack) {
          if (st.toLowerCase() === nextStateLabel.toLowerCase()) {
            lines.push(level + "and follows as " + nextStateLabel);
            alreadyVisited = true;
            break;
          }
        }

        if (!alreadyVisited) {
          // go deeper
          const nextState = this.findState(nextStateLabel);
          if (!nextState) return [`ERROR: state ${nextStateLabel} not found at condition in level ${level}`];
          console.log(`going down at ${nextState.label}`);
          console.log("stack", stack);
          lines = lines.concat(this.followThePath(nextState, level, stack));
        }
      }
    } else {
      // transition
      const nextState = this.findState(state.transition);

      if (!nextState) return ["ERROR: state " + state.transition + " not found at level " + level];

      if (nextState.label === "Check if game completed") {
        lines.push(level + "and ends in " + nextState.label);
      } else if (stack.includes(nextState.label)) {
        lines.push(level + "and follows as " + nextState.label);
      } else {
        // formating the text
        if (!lines[0].includes(", we have the following rules:")) {
          lines[0] += ", just go ahead to the step labeled as '" + nextState.label + "'";
        } else {
          lines.push("Next, go to step labeled as '" + nextState.label + "'");
        }
        // next state
        lines = lines.concat(this.followThePath(nextState, level, stack));
      }
    }

    return lines;
  };

  /**
   *
   * @param initialSt
   * @returns
   */
  model2text = (initialSt: State) => {
    if (!initialSt) return;

    const lines = this.followThePath(initialSt, "", []);

    return lines;
  };

  print() {
    const printContent = document.getElementById("printable");
    const WindowPrt = window.open("", "", "left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0");
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.write('<link rel="stylesheet" type="text/css" href="./summary.component.css">');
    WindowPrt.document.write('<link rel="stylesheet" type="text/css" href="../../shared/styles/style.css">');
    WindowPrt.document.write('<link rel="stylesheet" type="text/css" href="../../shared/styles/cardsAndDecks.css">');
    WindowPrt.document.write('<link rel="stylesheet" type="text/css" href="../../shared/styles/card.css">');
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }
}
