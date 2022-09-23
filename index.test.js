const {existsSync} = require("fs");

test("index.json exists", () => {
  expect(existsSync("./index.json")).toBe(true);
});

test("index.json exports", () => {
  const json = require("./index.json");

  expect(typeof json).toBe("object");
});
