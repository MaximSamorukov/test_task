import { fireEvent, screen, within } from "@testing-library/react";
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

test("Open / Close button is working", async () => {
  render(<App />);
  const openCloseButton = screen.getByTestId("open-btn");
  expect(openCloseButton).toBeInTheDocument();
  const listFieldBeforeClick = screen.queryByTestId("list");
  expect(listFieldBeforeClick).not.toBeInTheDocument();
  fireEvent.click(openCloseButton);
  const listFieldAfterClick = screen.getByTestId("list");
  expect(listFieldAfterClick).toBeInTheDocument();
  fireEvent.click(openCloseButton);
  const listFieldFinally = screen.queryByTestId("list");
  expect(listFieldFinally).not.toBeInTheDocument();
});

test("Filter should be working", async () => {
  render(<App />);
  const input = screen.getByPlaceholderText("What needs to be done?");
  fireEvent.change(input, { target: { value: "Test task 1" } });
  await userEvent.type(input, "{enter}");
  fireEvent.change(input, { target: { value: "Test task 2" } });
  await userEvent.type(input, "{enter}");
  fireEvent.change(input, { target: { value: "Test task 3" } });
  await userEvent.type(input, "{enter}");

  const listField = screen.queryByTestId("list");
  expect(listField).toBeInTheDocument();

  const allTasksBtn = screen.getByTestId("all");
  const completedTasksBtn = screen.getByTestId("completed");
  const activeTasksBtn = screen.getByTestId("active");

  expect(allTasksBtn).toBeInTheDocument();
  expect(completedTasksBtn).toBeInTheDocument();
  expect(activeTasksBtn).toBeInTheDocument();

  expect(
    screen.getByPlaceholderText("What needs to be done?")
  ).toBeInTheDocument();
  expect(screen.getByText("Test task 1")).toBeInTheDocument();
  expect(screen.getByText("Test task 2")).toBeInTheDocument();
  expect(screen.getByText("Test task 3")).toBeInTheDocument();

  const task2Container = screen.getByTestId("Test task 2");
  const task2Btn = within(task2Container).getByRole("button");
  expect(task2Btn).toBeInTheDocument();
  fireEvent.click(task2Btn);

  fireEvent.click(activeTasksBtn);

  expect(screen.getByText("Test task 1")).toBeInTheDocument();
  expect(screen.queryByTestId("Test task 2")).not.toBeInTheDocument();
  expect(screen.getByText("Test task 3")).toBeInTheDocument();

  fireEvent.click(completedTasksBtn);

  expect(screen.queryByText("Test task 1")).not.toBeInTheDocument();
  expect(screen.getByText("Test task 2")).toBeInTheDocument();
  expect(screen.queryByText("Test task 3")).not.toBeInTheDocument();

  fireEvent.click(allTasksBtn);

  expect(screen.getByText("Test task 1")).toBeInTheDocument();
  expect(screen.getByText("Test task 2")).toBeInTheDocument();
  expect(screen.getByText("Test task 3")).toBeInTheDocument();
  expect(screen.queryByText("2 items left")).toBeInTheDocument();

  const clearCompletedBtnContainer = screen.getByTestId("clearCompleted");
  const clearCompletedBtn = within(clearCompletedBtnContainer).getByRole(
    "button"
  );

  fireEvent.click(clearCompletedBtn);

  expect(screen.getByText("Test task 1")).toBeInTheDocument();
  expect(screen.queryByTestId("Test task 2")).not.toBeInTheDocument();
  expect(screen.getByText("Test task 3")).toBeInTheDocument();
});
