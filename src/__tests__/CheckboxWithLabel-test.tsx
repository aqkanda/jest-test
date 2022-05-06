import { cleanup, fireEvent, screen, render } from "@testing-library/react";
import CheckboxWithLabel from "../CheckboxWithLabel";

//DOMのテスト

// テスト実行後にDOMをunmount, cleanupします
afterEach(cleanup);

it("label変更テスト", () => {
  render(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
  //初期状態はoffかの確認(iは大文字の区別をしない)
  expect(screen.getByLabelText(/off/i)).toBeTruthy();
  //labelがoffのボタンをクリックする
  fireEvent.click(screen.getByLabelText(/off/i));
  //onになっているかの確認
  expect(screen.getByLabelText(/on/i)).toBeTruthy();

  fireEvent.click(screen.getByLabelText(/on/i));

  expect(screen.getByLabelText(/off/i)).toBeTruthy();
});
