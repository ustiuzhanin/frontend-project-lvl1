import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');

export const getEvenAnswer = () => {
  const getRandomNumber = Math.floor(Math.random() * 100) + 1;

  console.log(`Question: ${getRandomNumber}`);

  const answer = readlineSync.question(`Your answer: `);

  if (
    (getRandomNumber % 2 === 0 && answer === 'yes') ||
    (getRandomNumber % 2 !== 0 && answer === 'no')
  ) {
    return true;
  }

  if (getRandomNumber % 2 === 0 && answer === 'no') {
    return console.log('"no" is wrong answer ;(. Correct answer was "yes".');
  }
  if (getRandomNumber % 2 !== 0 && answer === 'yes') {
    return console.log('"yes" is wrong answer ;(. Correct answer was "no".');
  }
  return console.log('Wrong answer!');
};
