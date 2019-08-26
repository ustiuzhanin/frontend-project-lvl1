import launchGame from '..';
import {
  getRandomNumber,
  decorate,
  getSmallestNum,
  getLargestNum,
} from '../util';

const description = `Find the ${decorate(
  'greatest common divisor',
  'green',
)} of given numbers.`;

const gcd = (result) => {
  const gameResult = result;
  const num1 = getRandomNumber(1, 21);
  const num2 = getRandomNumber(1, 21);

  const smallestNum = getSmallestNum(num1, num2);
  const largestNum = getLargestNum(num1, num2);

  for (let i = smallestNum; i > 0; i -= 1) {
    if (smallestNum % i === 0 && largestNum % i === 0) {
      gameResult.rightAnswer = i.toString();
      gameResult.question = `${num1} ${num2}`;
      break;
    }
  }
  return gameResult;
};

export default () => launchGame(gcd, description, 'GCD');
