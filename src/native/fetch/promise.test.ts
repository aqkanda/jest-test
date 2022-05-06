import { fetchData } from "./fetchData";
test("the data is peanut butter", () => {
  return fetchData().then((data: any) => {
    expect(data).toBe("peanut butter");
  });
});
