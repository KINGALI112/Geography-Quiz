// Define the questions and answers for the quiz
const questions = [
    {
      question: "What is the capital of France?",
      // answers: ["Paris", "London", "Berlin", "Rome"],
      answers:[
        {text: "Paris", correct: true},
        {text: "London", correct: false},
        {text: "Berlin", correct: false},
        {text: "Rome", correct: false},
      ],
    },
    {
      question: "What is the highest mountain in the world?",
      // answers: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      answers: [
        {text: "Mount Everest", correct: true},
        {text: "K2", correct: false},
        {text: "Kangchenjunga", correct: false},
        {text: "Lhotse", correct: false},
      ],
    },
    {
        question: "What continent is America in?",
        // answers: ["Mountains", "Brazil", "Nepal", "North America"],
        answers: [
          {text: "Mountains", correct: false},
          {text: "Brazil", correct: false},
          {text: "Nepal", correct: false},
          {text: "North America", correct: true},
        ],
    },
    {
        question: "Name one country in South America?",
        // answers: ["Brazil, London, America, Iraq"],
        answers: [
          {text: "Brazil", correct: true},
          {text: "London", correct: false},
          {text: "America", correct: false},
          {text: "Iraq", correct: false},
        ],
    },
  ];
  
  // // Define the timer and the time penalty for an incorrect answer
  // const timerDuration = 60; // In seconds
  // const timePenalty = 10; // In seconds
  
  // let currentQuestionIndex = 0;
  // let timeRemaining = timerDuration;
  // let score = 0;
  
  