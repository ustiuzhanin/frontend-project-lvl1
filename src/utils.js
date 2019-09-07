export const getRandomNumber = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min + 1) + min); // eslint-disable-line

export const decorate = (str, color) => {
  switch (color) {
    case 'red':
      return `\x1b[31m${str}\x1b[0m`;
    case 'green':
      return `\x1b[32m${str}\x1b[0m`;
    case 'blue':
      return `\x1b[34m${str}\x1b[0m`;
    default:
      return `${str}\x1b[0m`;
  }
};
