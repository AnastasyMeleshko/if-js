const sum = require("./main.js");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("adds 1 + -3 to equal -2", () => {
  expect(sum(1, -3)).toBe(-2);
});
test("adds 'a' + 'b' to equal 'ab'", () => {
  expect(sum("a", "b")).toBe("ab");
});
test("adds 'a' + -7 to equal 'a-7'", () => {
  expect(sum("a", "-7")).toBe("a-7");
});
test("adds 'a' + 7 to equal 'a7'", () => {
  expect(sum("a", "7")).toBe("a7");
});
test("adds -9 + -7 to equal -16", () => {
  expect(sum(-9, -7)).toBe(-16);
});
test("adds undefined + undefined to equal NaN", () => {
  expect(sum(undefined, undefined)).toBe(NaN);
});
test("adds null + null to equal 0", () => {
  expect(sum(null, null)).toBe(0);
});
test("adds undefined + NaN to equal NaN", () => {
  expect(sum(undefined, NaN)).toBe(NaN);
});
test("adds NaN + undefined to equal NaN", () => {
  expect(sum(NaN, undefined)).toBe(NaN);
});
test("adds undefined + null to equal NaN", () => {
  expect(sum(undefined, null)).toBe(NaN);
});
test("adds null + undefined to equal NaN", () => {
  expect(sum(null, undefined)).toBe(NaN);
});
