#!/usr/bin/env node

import brainEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenGame = () => {
  const getRandomInt = () => Math.floor(Math.random() * (101 - 1) + 1);
  const isEven = (num) => num % 2 === 0;

  const generateRound = () => {
    const randomNumber = getRandomInt(0, 100);
    const question = randomNumber.toString();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    return [correctAnswer, question];
  };

  brainEngine(rules, generateRound);
};

export default isEvenGame;
