import { subtract, sum } from "./exampleServices";

test('Should sum a plus b', () => {
  const sumResult = sum(1, 2)
  expect(sumResult).toBe(3);
});

test('Should sum a plus b correctly', () => {
  const sumResult = sum(15, 2)
  expect(sumResult).not.toBe(3);
});

test('Should subtract a and b correctly', () => {
  const sumResult = subtract(15, 2)
  expect(sumResult).not.toBe(3);
});


test('Should subtract a and b correctly', () => {
  const sumResult = subtract(15, 2)
  expect(sumResult).toBe(13);
});