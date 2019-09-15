import playGame from '..';
import { getRandomNumber, decorate } from '../utils';

const description = `Answer ${decorate(
  '"yes"',
  'green',
)} if number even otherwise answer ${decorate('"no"', 'red')}.`;

const isEven = (number) => number % 2 === 0;

const generateRoundData = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    rightAnswer,
  };
};

export default () => playGame(generateRoundData, description);
