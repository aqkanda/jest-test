test("two plus two", () => {
  const value = 2 + 2;
  //3より上
  expect(value).toBeGreaterThan(3);
  //3.5以上
  expect(value).toBeGreaterThanOrEqual(3.5);
  //5より下
  expect(value).toBeLessThan(5);
  //4.5以下
  expect(value).toBeLessThanOrEqual(4.5);
  // toBe and toEqual are equivalent for numbers
  //4の時
  expect(value).toBe(4);
  //4の時
  expect(value).toEqual(4);
});
