import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

//describe - to group test cases 
describe("Contact Us test cases", () => {
  // test("Should load the contact page", () => {
  //   render(<Contact />);

  //   const heading = screen.getByRole("heading");

  //   expect(heading).toBeInTheDocument();
  // });

  // test("Should load button inside contact page", () => {
  //   render(<Contact />);
  //   const button = screen.getByRole("button");
  //   expect(button).toBeInTheDocument();
  // });

  // test("Should load input inside contact page", () => {
  //   render(<Contact />);
  //   const input = screen.getByPlaceholderText("Your name");
  //   expect(input).toBeInTheDocument();
  // });

  test("Should load all input fields inside contact page", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(3); //Passes
  });
});

//test() or it() => it is just an alias for test

it("Should update name field on change", () => {
  render(<Contact />);
  const nameInput = screen.getByPlaceholderText("Your name");
  fireEvent.change(nameInput, { target: { value: "John" } });
  expect(nameInput.value).toBe("John");
});

test("Should submit the form", () => {
  render(<Contact />);
  const nameInput = screen.getByPlaceholderText("Your name");
  const emailInput = screen.getByPlaceholderText("your@email.com");
  const messageInput = screen.getByPlaceholderText(
    "Write your message here...",
  );

  fireEvent.change(nameInput, { target: { value: "John" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(messageInput, { target: { value: "Hello" } });

  fireEvent.click(screen.getByRole("button", { name: /send message/i }));
});
