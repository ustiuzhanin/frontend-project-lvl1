import readlineSync from 'readline-sync';
import startCalc from './games/calc';
import startEven from './games/even';
import startGcd from './games/gcd';
import startPrime from './games/prime';
import startProgression from './games/progression';
import { decorate } from './utils';

console.log(`${decorate('Welcome to the Brain Games!', 'blue')}`);

const games = [
  'brain-calc',
  'brain-even',
  'brain-gcd',
  'brain-prime',
  'brain-progression',
];

const launchMenu = () => {
  const index = readlineSync.keyInSelect(
    games,
    'Please choose a game you would like to play!',
  );

  switch (games[index]) {
    case 'brain-calc':
      startCalc();
      break;
    case 'brain-even':
      startEven();
      break;
    case 'brain-gcd':
      startGcd();
      break;
    case 'brain-prime':
      startPrime();
      break;
    case 'brain-progression':
      startProgression();
      break;
    default:
      console.log('Bye!');
      break;
  }
};
export default launchMenu;
