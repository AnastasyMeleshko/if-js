const changeFormat = require("./main.js");

test("date 2020-11-26 equal to 26.11.2020", () => {
  expect(changeFormat("2020-11-26")).toBe("26.11.2020");
});
test("date 2021/12/14 equal to 14.12.2021", () => {
  expect(changeFormat("2021/12/14")).toBe("14.12.2021");
});
test("check of format of date: 2020 to be incorrect", () => {
  expect(changeFormat("2020")).toBe("Формат даты не корректен");
});
test("check of format of date: 2020-22 to be incorrect", () => {
  expect(changeFormat("2020-22")).toBe("Формат даты не корректен");
});
test("check of format of date: aabbcc to be incorrect", () => {
  expect(changeFormat("aabbcc")).toBe("Формат даты не корректен");
});
