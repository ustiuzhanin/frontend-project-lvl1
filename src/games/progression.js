import launchGame from '..';
import { getRandomNumber, decorate } from '../utils';

const description = `What number is ${decorate(
  'missing in the progression?',
  'green',
)}`;

const generateProgression = () => {
  const progressionQuestion = [];
  const progressionStart = getRandomNumber();
  const progressionLength = 10;
  const hiddenItemIndex = getRandomNumber(0, progressionLength);
  const stepSmallest = 2;
  const stepBiggest = 10;
  const step = getRandomNumber(stepSmallest, stepBiggest);

  let i = progressionStart;
  while (progressionQuestion.length < progressionLength) {
    progressionQuestion.push(i);
    i += step;
  }

  const rightAnswer = progressionQuestion[hiddenItemIndex].toString();
  progressionQuestion[hiddenItemIndex] = '..';
  const question = progressionQuestion.join(' ');

  return {
    rightAnswer,
    question,
  };
};

export default () => launchGame(generateProgression, description, 'Progression');
