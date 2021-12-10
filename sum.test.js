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
