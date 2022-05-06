import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  //learn reactのエレメントを取得
  // const linkElement = screen.getByText(/learn react/i);
  // //bodyに存在しているかの確認
  // expect(linkElement).toBeInTheDocument();
});
