import Answer from "../model/answer";
import Question from "../model/question";

export const personalityTestQuestions: Question[] = [
  new Question(
    1,
    "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
    [
      new Answer(1, "Don't dare to interrupt them.", -2),
      new Answer(
        2,
        "Think it’s more important to give them some of your time; work can wait.",
        -1
      ),
      new Answer(3, "Listen, but with only with half an ear.", 1),
      new Answer(
        4,
        "Interrupt and explain that you are really busy at the moment.",
        2
      ),
    ]
  ),
  new Question(
    2,
    "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
    [
      new Answer(1, "Look at your watch every two minutes.", -2),
      new Answer(2, "Bubble with inner anger, but keep quiet.", -1),
      new Answer(
        3,
        "Explain to other equally impatient people in the room that the doctor is always running late.",
        1
      ),
      new Answer(
        4,
        "Complain in a loud voice, while tapping your foot impatiently.",
        2
      ),
    ]
  ),
  new Question(
    3,
    "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
    [
      new Answer(1, "Don’t dare contradict them.", -2),
      new Answer(2, "Think that they are obviously right.", -1),
      new Answer(3, "Defend your own point of view, tooth and nail.", 1),
      new Answer(4, "Continuously interrupt your colleague.", 2),
    ]
  ),
  new Question(4, "You are taking part in a guided tour of a museum. You:", [
    new Answer(
      1,
      "Are a bit too far towards the back so don’t really hear what the guide is saying.",
      -2
    ),
    new Answer(2, "Follow the group without question.", -1),
    new Answer(3, "Make sure that everyone is able to hear properly.", 1),
    new Answer(
      4,
      "Are right up the front, adding your own comments in a loud voice.",
      2
    ),
  ]),
];
