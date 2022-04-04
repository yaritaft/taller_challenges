const sortingCriteriaAscendingNumbers = (a: number, b: number) => a - b;

export const powerOfTwoInAscendingOrder = (numbers: number[]): number[] => {
  const calculatedNumbers = numbers
    .map((number) => number ** 2)
    .sort(sortingCriteriaAscendingNumbers);
  return calculatedNumbers;
};
