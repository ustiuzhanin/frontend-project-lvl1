import launchGame from '..';
import { getRandomNumber, decorate } from '../util';

const description = `What number is ${decorate(
  'missing in the progression?',
  'green',
)}`;

const progression = (result) => {
  const gameResult = result;
  const progressionStart = getRandomNumber();
  const hiddenItem = getRandomNumber(0, 10);
  const progressionQuestion = [];
  const step = getRandomNumber(2, 10);

  let i = progressionStart;
  while (progressionQuestion.length < 10) {
    progressionQuestion.push(i);
    i += step;
  }

  gameResult.rightAnswer = progressionQuestion[hiddenItem].toString();
  progressionQuestion[hiddenItem] = '..';
  gameResult.question = progressionQuestion.join(' ');

  return gameResult;
};

export default () => launchGame(progression, description, 'Progression');
