import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../todo";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

test("shold render incomplete todo", () => {
  const todo = { id: 1, title: "wash chicken", completed: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash chicken");
  expect(todoElement).not.toContainHTML("<strike>");
});

test("shold render complete todo", () => {
  const todo = { id: 2, title: "wash windows", completed: true };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash windows");
  expect(todoElement).toContainHTML("</strike>");
});

test("matches snapshot", () => {
  const todo = { id: 1, title: "wash chicken", completed: false };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
