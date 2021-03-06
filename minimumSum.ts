const isNextNumberTheFollowingNumber = (results: number[], index: number, value: number): boolean =>
  results[index + 1] === value + 1;

const isLastResult = (results: number[], index: number): boolean => results.length === index + 1;

const sortingCriteriaCoinsResults = (a: number, b: number) => a - b;

const zeroCoinsFound = () => -1;

const findMinimumSum = (results: number[]): number => {
  for (const index of Object.keys(results)) {
    const i = Number(index);
    if (!isNextNumberTheFollowingNumber(results, i, results[i]) || isLastResult(results, i)) {
      return results[i] + 1;
    }
  }
  return zeroCoinsFound();
};

function calculateEverySum(list: (number | null)[], acum: number, results: number[]): void {
  list.forEach((value, index) => {
    const copyList = [...list];
    copyList[Number(index)] = null;
    if (value !== null) {
      results.push(value + acum);
      calculateEverySum(copyList, value + acum, results);
    }
  });
}

export const minimumSum = (list: number[]): number => {
  const results: number[] = [];
  calculateEverySum(list, 0, results);
  const nonRepeated = new Set(results);
  const sorted = [...nonRepeated].sort(sortingCriteriaCoinsResults);
  const maxNonAchievableSum = findMinimumSum(sorted);
  return maxNonAchievableSum;
};
