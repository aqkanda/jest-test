import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { ChangeText } from "../ChangeText";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);
//idで取得する？
test("text変更テスト", () => {
  render(<ChangeText />);

  expect(screen.getByText(/Hello Wolrd!/i)).toBeTruthy();

  const inputValue: HTMLInputElement = screen.getByRole("textbox");

  userEvent.type(inputValue, "test");

  expect(inputValue.value).toBe("test");
  //   if (inputValue instanceof HTMLInputElement) {

  //   }

  fireEvent.click(screen.getByText(/change/i));

  expect(inputValue.value).toBe("");

  expect(screen.getByText(/test/i)).toBeTruthy();
});
