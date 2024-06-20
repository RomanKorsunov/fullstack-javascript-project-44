import brainEngine from '../index.js';
import getRandomInRange from '../randomInt.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenGame = () => {
  const isEven = (num) => num % 2 === 0;

  const generateRound = () => {
    const randomNumber = getRandomInRange();
    const question = randomNumber.toString();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    return [correctAnswer, question];
  };

  brainEngine(rules, generateRound);
};

export default isEvenGame;
