export const getRandomNumber = (first = 1, last = 100) =>
  Math.floor(Math.random() * last) + first;
