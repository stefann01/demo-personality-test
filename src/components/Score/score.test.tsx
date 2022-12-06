import React from "react";
import { render, screen } from "@testing-library/react";
import Score from "./score";

test("renders score title", () => {
  render(<Score scorePercentage={50} result="test" onRestartTest={() => {}} />);
  const scoreTitle = screen.getByText(
    /Your score is 50%. You are more of a test person./i
  );

  expect(scoreTitle).toBeInTheDocument();
});

test("renders restart button", () => {
  render(<Score scorePercentage={50} result="test" onRestartTest={() => {}} />);
  const restartButton = screen.getByText(/Restart test/i);
  expect(restartButton).toBeInTheDocument();
});

test("on restart button click calls onRestartTest", () => {
  const onRestartTest = jest.fn();
  render(
    <Score scorePercentage={50} result="test" onRestartTest={onRestartTest} />
  );
  const restartButton = screen.getByText(/Restart test/i);
  restartButton.click();
  expect(onRestartTest).toHaveBeenCalled();
});
