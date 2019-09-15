import playGame from '..';
import { getRandomNumber, decorate } from '../utils';

const description = `What is ${decorate(
  'the result of the expression?',
  'green'
)}`;

const operations = [
  {
    sign: '+',
    method: (a, b) => a + b
  },
  {
    sign: '-',
    method: (a, b) => a - b
  },
  {
    sign: '*',
    method: (a, b) => a * b
  }
];

const generateRoundData = () => {
  const operandA = getRandomNumber(1, 100);
  const operandB = getRandomNumber(1, 100);
  const operation = operations[getRandomNumber(0, operations.length - 1)];

  const question = `${operandA} ${operation.sign} ${operandB}`;
  const rightAnswer = operation.method(operandA, operandB).toString();

  return {
    question,
    rightAnswer
  };
};

export default () => playGame(generateRoundData, description);
