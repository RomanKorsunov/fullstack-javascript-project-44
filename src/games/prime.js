#!/usr/bin/env node

import brainEngine from '../index.js';
import getRandomInt from '../randomInt.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeGame = () => {
  const isPrime = (number) => {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i <= number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
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
