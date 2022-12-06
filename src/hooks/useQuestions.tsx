import React, { useEffect } from "react";
import { getPersonalityTestQuestions } from "../api";
import Question from "../model/question";

type QuestionData = {
  questions: Question[];
  maxScore: number;
  minScore: number;
};

export default function useQuestions() {
  const [data, setData] = React.useState<QuestionData | null>(null);
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const data = await getPersonalityTestQuestions();
        setData(data as QuestionData);
      } catch (error: any) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return {
    questions: data?.questions,
    error,
    loading,
    maxScore: data?.maxScore || 0,
    minScore: data?.minScore || 0,
  };
}
