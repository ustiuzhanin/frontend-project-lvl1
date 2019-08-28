import launchGame from '..';
import { getRandomNumber, decorate, getGcd } from '../utils';

const description = `Find the ${decorate(
  'greatest common divisor',
  'green',
)} of given numbers.`;

const generateGcd = () => {
  const num1 = getRandomNumber(1, 21);
  const num2 = getRandomNumber(1, 21);

  const rightAnswer = getGcd(num1, num2).toString();
  const question = `${num1} ${num2}`;

  return {
    question,
    rightAnswer,
  };
};

export default () => launchGame(generateGcd, description, 'GCD');
