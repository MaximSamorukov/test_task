import { fireEvent, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { render } from "./test-utils";
import App from "@/App";

test("Input should have placeholder", async () => {
  render(<App />);
  const input = screen.getByPlaceholderText("What needs to be done?");
  expect(input).toBeInTheDocument();
});

test("Should add task", async () => {
  render(<App />);
  const input = screen.getByPlaceholderText("What needs to be done?");
  fireEvent.change(input, { target: { value: "Test task 1" } });
  await userEvent.type(input, "{enter}");
  expect(
    screen.getByPlaceholderText("What needs to be done?")
  ).toBeInTheDocument();
  expect(screen.getByText("Test task 1")).toBeInTheDocument();
});

test("Should add several tasks", async () => {
  render(<App />);
  const input = screen.getByPlaceholderText("What needs to be done?");
  fireEvent.change(input, { target: { value: "Test task 1" } });
  await userEvent.type(input, "{enter}");
  fireEvent.change(input, { target: { value: "Test task 2" } });
  await userEvent.type(input, "{enter}");
  expect(
    screen.getByPlaceholderText("What needs to be done?")
  ).toBeInTheDocument();
  expect(screen.getByText("Test task 1")).toBeInTheDocument();
  expect(screen.getByText("Test task 2")).toBeInTheDocument();
});
