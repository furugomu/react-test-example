import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  test("show count", () => {
    render(<Counter />);
    expect(screen.getByText(/^クッキーが/)).toHaveTextContent("クッキーが0個");
  });

  test("increment", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("増やす"));
    expect(screen.getByText(/^クッキーが/)).toHaveTextContent("クッキーが1個");
  });
});

export {};
