test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      //0の時エラーを出力
      expect(a + b).not.toBe(0);
    }
  }
});