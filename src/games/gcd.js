import launchGame from '..';
import { getRandomNumber, decorate } from '../utils';

const description = `Find the ${decorate(
  'greatest common divisor',
  'green',
)} of given numbers.`;

// eslint-disable-next-line consistent-return
const getGcd = (num1, num2) => {
  const smallest = Math.min(num1, num2);
  const largest = Math.max(num1, num2);

  for (let i = smallest; i > 0; i -= 1) {
    if (smallest % i === 0 && largest % i === 0) {
      return i;
    }
  }
};

const generateRoundData = () => {
  const num1 = getRandomNumber(1, 21);
  const num2 = getRandomNumber(1, 21);

  const rightAnswer = getGcd(num1, num2).toString();
  const question = `${num1} ${num2}`;

  return {
    question,
    rightAnswer,
  };
};

export default () => launchGame(generateRoundData, description);
