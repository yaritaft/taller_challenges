import { powerOfTwoInAscendingOrder } from "../powerOfTwoInAscendingOrder";

describe("Testing Power of Two and Sorting in Ascending Order", () => {
  test("Test Case 1", () => {
    const results = powerOfTwoInAscendingOrder([1, 2, 3, 5, 6, 8, 9]);
    expect(results).toEqual([1, 4, 9, 25, 36, 64, 81]);
  });
  test("Test Case 2", () => {
    const results = powerOfTwoInAscendingOrder([-2, -1]);
    expect(results).toEqual([1, 4]);
  });
  test("Test Case 3", () => {
    const results = powerOfTwoInAscendingOrder([-10, -5, 0, 5, 10]);
    expect(results).toEqual([0, 25, 25, 100, 100]);
  });
});
