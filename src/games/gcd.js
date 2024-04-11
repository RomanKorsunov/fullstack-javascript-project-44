#!/usr/bin/env node

import brainEngine from '../index.js';
import getRandomInt from '../randomInt.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const getGcdNumbers = (number1, number2) => {
    let num1 = number1;
    let num2 = number2;

    while (num2 !== 0) {
      const temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    return num1;
  };

  const generateRound = () => {
    const number1 = getRandomInt();
    const number2 = getRandomInt();

    const question = `${number1} ${number2}`;
    const correctAnswer = getGcdNumbers(number1, number2);

    return [correctAnswer.toString(), question];
  };

  brainEngine(rules, generateRound);
};

export default gcdGame;
