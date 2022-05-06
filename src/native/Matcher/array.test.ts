const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  //milkが含まれているかどうか
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("paper towels");
});
