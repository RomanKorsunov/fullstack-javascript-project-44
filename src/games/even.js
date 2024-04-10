#!/usr/bin/env node

import brainEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenGame = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);
  const isEven = (num) => num % 2 === 0;

  const generateRound = () => {
    const randomNumber = getRandomInt(0, 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const question = randomNumber.toString();

    return [correctAnswer, question];
  };

  brainEngine(rules, generateRound);
};

export { isEvenGame };
