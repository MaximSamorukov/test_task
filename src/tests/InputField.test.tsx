import { fireEvent, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { InputField } from "@/components/InputField";
import { render } from "./test-utils";

test("Should have placeholder", async () => {
  render(<InputField placeholder="Placeholder" />);
  const input = screen.getByPlaceholderText("Placeholder");
  expect(input).toBeInTheDocument();
});

test("Should have input text", async () => {
  render(<InputField placeholder="Placeholder" />);
  const input = screen.getByPlaceholderText("Placeholder");
  fireEvent.change(input, { target: { value: "Test task 1" } });
  expect(input).toHaveDisplayValue("Test task 1");
});

test("Should have placeholder after Enter", async () => {
  render(<InputField placeholder="Placeholder" />);
  const input = screen.getByPlaceholderText("Placeholder");
  fireEvent.change(input, { target: { value: "Test task 1" } });
  await userEvent.type(input, "{enter}");
  expect(screen.getByPlaceholderText("Placeholder")).toBeInTheDocument();
});

test("Can use delete button", async () => {
  render(<InputField placeholder="Placeholder" />);
  const input = screen.getByPlaceholderText("Placeholder");
  fireEvent.change(input, { target: { value: "Test task 1" } });
  const deleteButton = screen.getByTestId("delete-btn");
  expect(deleteButton).toBeInTheDocument();
  fireEvent.click(deleteButton);
  expect(screen.getByPlaceholderText("Placeholder")).toBeInTheDocument();
});
