const PromiseTest = require("./fetchData");
test("the data is peanut butter", () => {
  return PromiseTest().then((data: any) => {
    expect(data).toBe("peanut butter");
  });
});
