import launchGame from '..';
import { getRandomNumber, decorate } from '../utils';

const description = `What number is ${decorate(
  'missing in the progression?',
  'green',
)}`;

const length = 10;

const generateQuestionForProgression = () => {
  let progression = '';
  const start = getRandomNumber();
  const diff = getRandomNumber(2, 10);
  const hiddenItemIndex = getRandomNumber(0, length);

  for (let i = 0; i < length; i += 1) {
    const element = i === hiddenItemIndex ? '..' : start + diff * i;
    progression += `${element} `;
  }

  const rightAnswer = (start + diff * hiddenItemIndex).toString();
  const question = progression;

  return {
    rightAnswer,
    question,
  };
};

export default () => launchGame(generateQuestionForProgression, description);
