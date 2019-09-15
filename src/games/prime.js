import playGame from '..';
import { getRandomNumber, decorate } from '../utils';

const description = `Answer ${decorate(
  '"yes"',
  'green'
)} if given number is prime. Otherwise answer ${decorate('"no"', 'red')}.`;

const isPrime = number => {
  if (number <= 1) return false;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRoundData = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    rightAnswer
  };
};

export default () => playGame(generateRoundData, description);
