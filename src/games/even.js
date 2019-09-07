import launchGame from '..';
import { getRandomNumber, decorate } from '../utils';

const description = `Answer ${decorate(
  '"yes"',
  'green',
)} if number even otherwise answer ${decorate('"no"', 'red')}.`;

const isEven = (number) => number % 2 === 0;

const generateQuestionForEven = () => {
  const question = getRandomNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    rightAnswer,
  };
};

export default () => launchGame(generateQuestionForEven, description);
