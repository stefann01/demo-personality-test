import { personalityTestQuestions } from "./backend/index";
export const getPersonalityTestQuestions = async () => {
  const random = Math.random();
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random < 0.5) {
        reject("Something went wrong");
      } else {
        resolve({
          questions: personalityTestQuestions,
          maxScore: personalityTestQuestions.length * 2,
          minScore: -personalityTestQuestions.length * 2,
        });
      }
    }, 1000);
  });
  return promise;
};
