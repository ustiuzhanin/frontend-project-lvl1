export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

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
