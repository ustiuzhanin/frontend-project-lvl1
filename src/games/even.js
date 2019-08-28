import launchGame from '..';
import { getRandomNumber, decorate, isEven } from '../utils';

const description = `Answer ${decorate(
  '"yes"',
  'green',
)} if number even otherwise answer ${decorate('"no"', 'red')}.`;

const generateEven = () => {
  const question = getRandomNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    rightAnswer,
  };
};

export default () => launchGame(generateEven, description, 'Even');
