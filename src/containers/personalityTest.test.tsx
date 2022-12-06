import React from "react";

import PersonalityTest from "./personalityTest";
import { fireEvent, render, screen } from "@testing-library/react";
import useQuestions from "../hooks/useQuestions";

const mockQuestions = [
  {
    id: 1,
    question: "You are the life of the party.",
    options: [
      {
        id: 1,
        answer: "mock answer",
        score: -1,
      },
      {
        id: 2,
        answer: "mock answer",
        score: 0,
      },
      {
        id: 3,
        answer: "mock answer",
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: "Mock question",
    options: [
      {
        id: 1,
        answer: "mock answer",
        score: -1,
      },
      {
        id: 2,
        answer: "mock answer",
        score: 0,
      },
      {
        id: 3,
        answer: "mock answer",
        score: 1,
      },
    ],
  },
];

jest.mock("../hooks/useQuestions");

test("renders loading", () => {
  (useQuestions as jest.Mock).mockReturnValue({
    loading: true,
  });

  render(<PersonalityTest />);
  const loading = screen.getByText(/Loading questions.../i);
  expect(loading).toBeInTheDocument();
});

test("renders error", () => {
  (useQuestions as jest.Mock).mockReturnValue({
    error: true,
  });

  render(<PersonalityTest />);
  const error = screen.getByText(
    /Oops, an error ocurred, please try again later./i
  );
  expect(error).toBeInTheDocument();
});

test("renders questions", () => {
  (useQuestions as jest.Mock).mockReturnValue({
    questions: mockQuestions,
  });

  render(<PersonalityTest />);
  const question = screen.getByText(/You are the life of the party./i);
  expect(question).toBeInTheDocument();
});

test("on question answer, go to next question", () => {
  (useQuestions as jest.Mock).mockReturnValue({
    questions: mockQuestions,
  });

  render(<PersonalityTest />);
  const options = screen.getAllByRole("button");
  expect(options).toHaveLength(3);

  fireEvent.click(options[0]);

  const nextQuestion = screen.getByText(/Mock question/i);
  expect(nextQuestion).toBeInTheDocument();
});

test("after last question answer, restart test", () => {
  (useQuestions as jest.Mock).mockReturnValue({
    questions: [mockQuestions[mockQuestions.length - 1]],
    minScore: -1,
    maxScore: 1,
  });

  render(<PersonalityTest />);
  const options = screen.getAllByRole("button");
  expect(options).toHaveLength(3);

  fireEvent.click(options[0]);

  const score = screen.getByText(
    /Your score is 0%. You are more of a Introvert person/i
  );
  expect(score).toBeInTheDocument();

  const restartButton = screen.getByText(/Restart test/i);
  expect(restartButton).toBeInTheDocument();

  fireEvent.click(restartButton);

  const question = screen.getByText(/Mock question/i);
  expect(question).toBeInTheDocument();
});

test.each([
  [0, "Your score is 0%. You are more of a Introvert person."],
  [1, "Your score is 50%. You are more of a Neutral person."],
  [2, "Your score is 100%. You are more of a Extrovert person."],
])("choosing answer %p should have %p score", (option, score) => {
  (useQuestions as jest.Mock).mockReturnValue({
    questions: [mockQuestions[mockQuestions.length - 1]],
    minScore: -1,
    maxScore: 1,
  });

  render(<PersonalityTest />);
  const options = screen.getAllByRole("button");
  expect(options).toHaveLength(3);

  fireEvent.click(options[option]);

  const scoreText = screen.getByTestId("scoreTitle");
  expect(scoreText.innerHTML).toEqual(score);
});
