#!/usr/bin/env node

import brainEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const getRandomInts = () => {
    const randomNumber1 = Math.floor(Math.random() * (101 - 1) + 1);
    const randomNumber2 = Math.floor(Math.random() * (101 - 1) + 1);
    return [randomNumber1, randomNumber2];
  };

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

  const getMaxOfArray = (numArray) => Math.max.apply(null, numArray);

  const generateRound = () => {
    const [randomNumber1, randomNumber2] = getRandomInts();

    const divisor1 = getDivisor(randomNumber1);
    const divisor2 = getDivisor(randomNumber2);

    const intersections = getIntersections(divisor1, divisor2);

    const question = `${randomNumber1} ${randomNumber2}`;
    const correctAnswer = getMaxOfArray(intersections);

    return [correctAnswer.toString(), question];
  };

  brainEngine(rules, generateRound);
};

export { gcdGame };
