test("object assignment", () => {
  const data: { one: 1; two?: 2 } = { one: 1 };
  data["two"] = 2;
  //objectが一致しているかの確認
  expect(data).toEqual({ one: 1, two: 2 });
});
