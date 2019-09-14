import launchGame from '..';
import { getRandomNumber, decorate } from '../utils';

const description = `Find the ${decorate(
  'greatest common divisor',
  'green'
)} of given numbers.`;

const getGcd = (num1, num2) => (!num2 ? num1 : getGcd(num2, num1 % num2));

const generateRoundData = () => {
  const num1 = getRandomNumber(1, 21);
  const num2 = getRandomNumber(1, 21);

  const rightAnswer = getGcd(num1, num2).toString();
  const question = `${num1} ${num2}`;

  return {
    question,
    rightAnswer
  };
};

export default () => launchGame(generateRoundData, description);
