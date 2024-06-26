import brainEngine from '../index.js';
import getRandomInRange from '../randomInt.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeGame = () => {
  const isPrime = (number) => {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  };

  const generateRound = () => {
    const randomNumber = getRandomInRange();
    const question = randomNumber.toString();
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    return [correctAnswer, question];
  };

  brainEngine(rules, generateRound);
};

export default isPrimeGame;
