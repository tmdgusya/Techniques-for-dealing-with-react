import { addNumber } from "./util";

test("add two numbers", () => {
  const result = addNumber(1, 2);
  expect(result).toBe(3);
});
