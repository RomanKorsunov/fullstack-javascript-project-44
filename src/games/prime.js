#!/usr/bin/env node

import brainEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeGame = () => {
  const getRandomInt = () => Math.floor(Math.random() * (101 - 1) + 1);

  const isPrime = (number) => {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  };

  const generateRound = () => {
    const randomNumber = getRandomInt();
    const question = randomNumber.toString();
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    return [correctAnswer, question];
  };

  brainEngine(rules, generateRound);
};

export default isPrimeGame;
