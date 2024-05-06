import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cards from ".";

afterEach(cleanup);

test("Renders single user", async () => {
  render(<Cards />);
  const singleUser = screen.getByTestId("single-user");
  expect(singleUser).toBeInTheDocument();
  expect(singleUser).toHaveTextContent("Single User");
});

test("Renders double user", async () => {
  render(<Cards />);
  const doubleUser = screen.getByTestId("double-user");
  expect(doubleUser).toBeInTheDocument();
  expect(doubleUser).toHaveTextContent("Double User");
});

test("Renders triple user", async () => {
  render(<Cards />);
  const tripleUser = screen.getByTestId("triple-user");
  expect(tripleUser).toBeInTheDocument();
  expect(tripleUser).toHaveTextContent("Triple User");
});

test("Renders hover button", async () => {
  render(<Cards />);
  const singleButton = screen.getByTestId("single-button");
  expect(singleButton).toBeInTheDocument();
  // fireEvent.focus(singleButton);
  singleButton.focus();
  expect(singleButton).toHaveFocus();
});
