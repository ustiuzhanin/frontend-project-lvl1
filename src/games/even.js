import launchGame from '..';
import { getRandomNumber, decorate } from '../util';

const description = `Answer ${decorate(
  '"yes"',
  'green',
)} if number even otherwise answer ${decorate('"no"', 'red')}.`;

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const even = (result) => {
  const gameResult = result;
  const questionNumber = getRandomNumber();

  gameResult.question = questionNumber;
  gameResult.rightAnswer = isEven(questionNumber);
  return gameResult;
};

export default () => launchGame(even, description, 'Even');
