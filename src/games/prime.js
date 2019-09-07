import launchGame from '..';
import { getRandomNumber, decorate } from '../utils';

const description = `Answer ${decorate(
  '"yes"',
  'green',
)} if given number is prime. Otherwise answer ${decorate('"no"', 'red')}.`;

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const generateQuestionForPrime = () => {
  const question = getRandomNumber();
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    rightAnswer,
  };
};

export default () => launchGame(generateQuestionForPrime, description);
