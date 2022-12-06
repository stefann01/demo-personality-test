import React from "react";
import Button from "../Button/Button";
import Section from "../Section/Section";
import classes from "./score.module.scss";

interface ScoreProps {
  scorePercentage: number;
  result: string;
  onRestartTest: () => void;
}

export default function Score({
  scorePercentage,
  result,
  onRestartTest,
}: ScoreProps) {
  return (
    <Section className={classes.scoreSection}>
      <h1 data-testid="scoreTitle">
        Your score is {scorePercentage}%. You are more of a {result} person.
      </h1>
      <Button buttonClass={classes.restartButton} onClick={onRestartTest}>
        Restart test
      </Button>
      <div className={classes.scoreLegend}>
        <div
          className={classes.indicator}
          style={{
            left: `calc(${scorePercentage}% - 10px)`,
          }}
        ></div>
        <div className={classes.minIndicator}></div>
        <div className={classes.maxIndicator}></div>
      </div>
    </Section>
  );
}
