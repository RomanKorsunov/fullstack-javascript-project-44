#!/usr/bin/env node

import brainEngine from '../index.js';
import getRandomInt from '../randomInt.js';

const rules = 'What is the result of the expression?';

const calculatorGame = () => {
  const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    return operators[Math.floor(Math.random() * operators.length)];
  };

  const generateRound = () => {
    const randomOperator = getRandomOperator();
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

    let correctAnswer = 0;

    switch (randomOperator) {
      case '+':
        correctAnswer = randomNumber1 + randomNumber2;
        break;
      case '-':
        correctAnswer = randomNumber1 - randomNumber2;
        break;
      case '*':
        correctAnswer = randomNumber1 * randomNumber2;
        break;
      default:
        correctAnswer = null;
    }
    return [correctAnswer.toString(), question];
  };

  brainEngine(rules, generateRound);
};

export default calculatorGame;
