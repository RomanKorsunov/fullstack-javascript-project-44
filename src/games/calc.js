#!/usr/bin/env node

import brainEngine from "../index.js";

const rules = "What is the result of the expression?";

const calculatorGame = () => {
  const getRandomOperator = () => {
    const operators = ["+", "-", "*"];
    return operators[Math.floor(Math.random() * operators.length)];
  };

  const getRandomInts = () => {
    const randomNumber1 = Math.floor(Math.random() * (101 - 1) + 1);
    const randomNumber2 = Math.floor(Math.random() * (101 - 1) + 1);
    return [randomNumber1, randomNumber2];
  };

  const generateRound = () => {
    const randomOperator = getRandomOperator();
    const [randomNumber1, randomNumber2] = getRandomInts();
    const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

    let correctAnswer = 0;

    switch (randomOperator) {
      case "+":
        correctAnswer = randomNumber1 + randomNumber2;
        break;
      case "-":
        correctAnswer = randomNumber1 - randomNumber2;
        break;
      case "*":
        correctAnswer = randomNumber1 * randomNumber2;
        break;
      default:
        correctAnswer = null;
    }
    return [correctAnswer.toString(), question];
  };

  brainEngine(rules, generateRound);
};

export { calculatorGame };
