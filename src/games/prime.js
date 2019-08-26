import launchGame from '..';
import { getRandomNumber, decorate } from '../util';

const description = `Answer ${decorate(
  '"yes"',
  'green',
)} if given number is prime. Otherwise answer ${decorate('"no"', 'red')}.`;

const isPrime = (number) => {
  let result;
  if (number > 1) {
    result = 'yes';
  } else {
    result = 'no';
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = 'no';
      break;
    }
  }
  return result;
};

const prime = (result) => {
  const gameResult = result;
  const questionNumber = getRandomNumber();

  gameResult.question = questionNumber;
  gameResult.rightAnswer = isPrime(questionNumber);
  return gameResult;
};

export default () => launchGame(prime, description, 'Prime');
