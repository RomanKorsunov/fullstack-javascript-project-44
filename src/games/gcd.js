#!/usr/bin/env node

import brainEngine from '../index.js';
import getRandomInt from '../randomInt.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const getDivisor = (number) => {
    const divisors = [];
    for (let i = 1; i <= number; i += 1) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  };

  const getIntersections = (coll1, coll2) => {
    const newColl = [];
    for (const item1 of coll1) {
      for (const item2 of coll2) {
        if (item1 === item2) {
          newColl.push(item1);
        }
      }
    }
    return newColl;
  };

  const generateRound = () => {
    const divisor1 = getDivisor(getRandomInt());
    const divisor2 = getDivisor(getRandomInt());

    const intersections = getIntersections(divisor1, divisor2);

    const question = `${getRandomInt()} ${getRandomInt()}`;
    const correctAnswer = Math.max.apply(null, intersections);

    return [correctAnswer.toString(), question];
  };

  brainEngine(rules, generateRound);
};

export default gcdGame;
