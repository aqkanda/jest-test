const asyncTest = require("./fetchData");

test("the data is peanut butter", async () => {
  const data = await asyncTest();
  expect(data).toBe("peanut butter");
});

// test("the fetch fails with an error", async () => {
//   expect.assertions(1);
//   try {
//     await asyncTest();
//   } catch (e) {
//     expect(e).toMatch("error");
//   }
// });

test("the data is peanut butter", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

// test("the fetch fails with an error", async () => {
//   await expect(fetchData()).rejects.toMatch("error");
// });
