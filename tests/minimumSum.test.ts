import { minimumSum } from "../minimumSum";

describe("Testing Power of Two and Sorting in Ascending Order", () => {
  test("Test Case 1", () => {
    const result = minimumSum([5, 7, 1, 1, 2, 3, 22]);
    expect(result).toEqual(20);
  });
  test("Test Case 2", () => {
    const result = minimumSum([1, 1, 1, 1, 1]);
    expect(result).toEqual(6);
  });
  test("Test Case 3", () => {
    const result = minimumSum([1, 5, 1, 1, 1, 10, 15, 20, 100]);
    expect(result).toEqual(55);
  });
});
