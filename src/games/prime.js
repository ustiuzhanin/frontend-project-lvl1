import launchGame from '..';
import { getRandomNumber, decorate, isPrime } from '../utils';

const description = `Answer ${decorate(
  '"yes"',
  'green',
)} if given number is prime. Otherwise answer ${decorate('"no"', 'red')}.`;

const generatePrime = () => {
  const question = getRandomNumber();
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    rightAnswer,
  };
};

export default () => launchGame(generatePrime, description, 'Prime');
