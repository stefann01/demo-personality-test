import Answer from "./answer";

export default class Question {
  constructor(
    public id: number,
    public question: string,
    public options: Answer[]
  ) {}
}
