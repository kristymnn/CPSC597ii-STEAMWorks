const qBank = [
  {
    question:
      "If the paper towel fibers are polar, the charge of the ends are",
    answers: ["both negative", "negative and positive", "both positive", "zero"],
    correct: "negative and positive",
    questionId: "01"
  },
  {
    question:
      'Which direction is the water moving?',
    answers: ["no movement", "sideway", "downward", "upward"],
    correct: "upward",
    questionId: "02"
  },
  {
    question:
      "What process allows the water to move between the cups?",
    answers: ["capillary action", "gravity", "magnetism", "photosynthesis"],
    correct: "capillary action",
    questionId: "03"
  },
  {
    question: "What is the attractive force between the water and paper towel?",
    answers: ["cohesive", "electromagnetic", "adhesive", "gravitational"],
    correct: "adhesive",
    questionId: "04"
  },
  {
    question: "What is the attractive force inside the water?",
    answers: ["adhesive", "cohesive", "electromagnetic", "gravitational"],
    correct: "cohesive",
    questionId: "05"
  },
  {
    question:
      "What helps water climb upward in plants?",
    answers: ["stems", "capillary tubes", "fibers", "none of these"],
    correct: "capillary tubes",
    questionId: "06"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
