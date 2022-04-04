const isNextNumberTheFollowingNumber = (
  results: number[],
  index: number,
  value: number
): boolean => results[index + 1] === value + 1;

const isLastResult = (results: number[], index: number): boolean =>
  results.length === index + 1;

const sortingCriteriaCoinsResults = (a: number, b: number) => a - b;

const zeroCoinsFound = () => -1;

const findMinimumSum = (results: number[]): number => {
  for (let i = 0; i < results.length; i++) {
    if (
      !isNextNumberTheFollowingNumber(results, i, results[i]) ||
      isLastResult(results, i)
    ) {
      console.log(results[i] + 1);
      console.log(results);
      return results[i] + 1;
    }
  }
  return zeroCoinsFound();
};

function calculateEverySum(
  list: number[],
  acum: number,
  results: number[]
): void {
  if (!list.length) {
    return;
  }
  for (const [index, value] of Object.entries(list)) {
    const copyList = [...list];
    copyList.splice(Number(index), 1);
    results.push(value + acum);
    calculateEverySum(copyList, value + acum, results);
  }
}

export const minimumSum = (lista: number[]): number => {
  const results: number[] = [];
  calculateEverySum(lista, 0, results);
  const nonRepeated = new Set(results);
  const sorted = [...nonRepeated].sort(sortingCriteriaCoinsResults);
  const maxNonAchievableSum = findMinimumSum(sorted);
  return maxNonAchievableSum;
};
