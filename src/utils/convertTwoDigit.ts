export const convertTwoDigit = (num: string): string => {
  return +num < 10 ? `0${num}` : num;
};
