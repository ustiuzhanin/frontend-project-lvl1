#!/usr/bin/env node

import { getName } from '..';
import { getEvenAnswer } from '..';

console.log('Welcome to the Brain Games!');

const name = getName();

console.log(`Hello ${name}!`);

const launchBrainEven = (correctAnswers = 1) => {
  const answer = getEvenAnswer();

  if (correctAnswers === 3) {
    return console.log(`Congratulations, ${name}!`);
  }

  if (answer) {
    console.log('Correct!');
    return launchBrainEven(correctAnswers + 1);
  }
  return console.log(`Let's try again, ${name}!`);
};
launchBrainEven();
