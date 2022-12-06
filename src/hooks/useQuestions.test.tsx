import useQuestions from "./useQuestions";
import { renderHook, waitFor } from "@testing-library/react";

import { getPersonalityTestQuestions } from "../api";

jest.mock("../api");

test("get data", async () => {
  (getPersonalityTestQuestions as jest.Mock).mockReturnValue(
    Promise.resolve({
      questions: [{ question1: "Some question" }],
      maxScore: 0,
      minScore: 0,
    })
  );
  const { result } = renderHook(() => useQuestions());
  await waitFor(() =>
    expect(result.current).toEqual({
      questions: undefined,
      maxScore: 0,
      minScore: 0,
      loading: true,
    })
  );

  await waitFor(() =>
    expect(result.current).toEqual({
      questions: [{ question1: "Some question" }],
      maxScore: 0,
      minScore: 0,
      loading: false,
    })
  );
});

test("get error", async () => {
  (getPersonalityTestQuestions as jest.Mock).mockReturnValue(
    Promise.reject(new Error("Some error"))
  );
  const { result } = renderHook(() => useQuestions());
  await waitFor(() =>
    expect(result.current).toEqual({
      questions: undefined,
      maxScore: 0,
      minScore: 0,
      loading: true,
    })
  );

  await waitFor(() =>
    expect(result.current).toEqual({
      questions: undefined,
      maxScore: 0,
      minScore: 0,
      loading: false,
      error: new Error("Some error"),
    })
  );
});
