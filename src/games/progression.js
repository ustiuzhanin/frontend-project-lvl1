import readlineSync from 'readline-sync';
import launchGame from '..';
import { getRandomNumber, colors } from '../util';


const desc = `What number is ${colors(
  'green',
)}missing in the progression?${colors('default')}`;

const progression = (gameRslt) => {
  let result = gameRslt;
  const progressionStart = getRandomNumber();
  const hiddenItem = getRandomNumber(0, 11);
  const progressionArr = [];
  const step = getRandomNumber(2, 10);

  let i = progressionStart;
  while (progressionArr.length < 10) {
    progressionArr.push(i);
    i += step;
  }

  result.rightAnswer = progressionArr[hiddenItem];
  progressionArr[hiddenItem] = '..';

  console.log(`Question: ${progressionArr.join(' ')}`);

  const answer = readlineSync.question('Your answer: ');

  if (result.rightAnswer === Number(answer)) {
    result.isRightAnswer = true;
    return result;
  }
  result = {
    ...result,
    isRightAnswer: false,
    wrongAnswer: answer,
  };
  return result;
};

export default () => launchGame(progression, desc, 'Progression');
