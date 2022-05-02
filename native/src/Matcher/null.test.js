test("null", () => {
  //nullの時合格
  const n = null;
  //nullの時
  expect(n).toBeNull();
  //undefinedの時
  expect(n).toBeDefined();
  //toBeUndefinedではないとき(反対)
  expect(n).not.toBeUndefined();
  //ifで真を返す時(反対)
  expect(n).not.toBeTruthy();
  //ifで偽を返す時
  expect(n).toBeFalsy();
});
