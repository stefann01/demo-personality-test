import React from "react";
import Button from "../components/Button/Button";
import Score from "../components/Score/score";
import Section from "../components/Section/Section";
import useQuestions from "../hooks/useQuestions";
import Answer from "../model/answer";
import classes from "./personalityTest.module.scss";

export default function PersonalityTest() {
  const { questions, maxScore, minScore, error, loading } = useQuestions();

  const [testState, setTestState] = React.useState<{
    currentQuestionIndex: number;
    score: number;
    testFinished: boolean;
  }>({
    currentQuestionIndex: 0,
    score: 0,
    testFinished: false,
  });

  const getScorePercentage = () => {
    return ((testState.score - minScore) / (maxScore - minScore)) * 100;
  };

  const interpretScore = () => {
    if (testState.score < 0) {
      return "Introvert";
    } else if (testState.score > 0) {
      return "Extrovert";
    } else {
      return "Neutral";
    }
  };

  const onAnswerClick = (answer: Answer) => {
    if (testState.currentQuestionIndex === questions!.length - 1) {
      setTestState({
        currentQuestionIndex: testState.currentQuestionIndex,
        score: testState.score + answer.score,
        testFinished: true,
      });
    } else {
      setTestState({
        currentQuestionIndex: testState.currentQuestionIndex + 1,
        score: testState.score + answer.score,
        testFinished: false,
      });
    }
  };

  return (
    <>
      {loading && <p>Loading questions...</p>}
      {error && <p>Oops, an error ocurred, please try again later.</p>}
      {questions && questions.length > 0 && !testState.testFinished && (
        <Section>
          <h1>
            {testState.currentQuestionIndex + 1}.
            {questions[testState.currentQuestionIndex].question}
          </h1>
          <ul className={classes.list}>
            {questions[testState.currentQuestionIndex].options.map(
              (answer: Answer, index) => (
                <li className={classes.item} key={answer.id}>
                  <Button onClick={() => onAnswerClick(answer)}>
                    {index + 1}. {answer.answer}
                  </Button>
                </li>
              )
            )}
          </ul>
        </Section>
      )}
      {testState.testFinished && (
        <Score
          scorePercentage={getScorePercentage()}
          result={interpretScore()}
          onRestartTest={() => {
            setTestState({
              currentQuestionIndex: 0,
              score: 0,
              testFinished: false,
            });
          }}
        />
      )}
    </>
  );
}
