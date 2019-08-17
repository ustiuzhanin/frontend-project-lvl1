import readlineSync from 'readline-sync';

const roundsCount = 3;
const gameResult = {
  isRightAnswer: false,
  wrongAnswer: '',
  rightAnswer: '',
};

const launchGame = (game, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const result = game(gameResult);

    if (result.isRightAnswer === false) {
      return console.log(
        `"${result.wrongAnswer}" is wrong answer ;(. Correct answer was "${
          result.rightAnswer
        }".`,
      );
    }

    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default launchGame;
