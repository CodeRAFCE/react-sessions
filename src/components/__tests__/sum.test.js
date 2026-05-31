import { sum } from "../sum";

// Syntax for writing a test case in Jest,
// which is a JavaScript testing framework.
test("Sum function should add two numbers correctly", () => {
  const result = sum(3, 4);

  // Assertion to check if the result of the
  // sum function is equal to 7.
  expect(result).toBe(7);
});
