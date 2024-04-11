#!/usr/bin/env node

import brainEngine from '../index.js';
import getRandomInt from '../randomInt.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const getGcdNumbers = (number1, number2) => {
    while (number2 !== 0) {
      const temp = number2;
      number2 = number1 % number2;
      number1 = temp;
    }
    return number1;
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
