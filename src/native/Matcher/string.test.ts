//正規表現で確認できる

//Iが含まれない
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});
//stopを含む
test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
//testを含む
test("test", () => {
  expect("aaatestbbb").toMatch(/test/);
});
