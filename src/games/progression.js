#!/usr/bin/env node

import brainEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const progressionGame = () => {
  const getProgression = () => {
    const firstNumber = Math.floor(Math.random() * (101 - 1) + 1);
    const progression = [firstNumber];
    const defference = Math.floor(Math.random() * (11 - 2) + 2);

    for (let i = 1; i < 10; i += 1) {
      progression.push(progression[i - 1] + defference);
    }
    return progression;
  };

  const getUpdateProgression = (progression) => {
    const hiddenIndex = Math.floor(Math.random() * (10 - 2) + 2);
    const hiddenNumber = progression[hiddenIndex];
    const replacedNumber = '..';

    const updateProgression = [];
    for (const number of progression) {
      const updateNumber = (number === hiddenNumber) ? replacedNumber : number;
      updateProgression.push(updateNumber);
    }
    return [updateProgression.join(' '), progression[hiddenIndex]];
  };

  const generateRound = () => {
    const [question, correctAnswer] = getUpdateProgression(getProgression());
    return [correctAnswer.toString(), question];
  };

  brainEngine(rules, generateRound);
};

export default progressionGame;
