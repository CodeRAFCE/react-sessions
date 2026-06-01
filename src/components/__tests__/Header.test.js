import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

import Header from "../Header";
import appStore from "../../utils/redux/store";

import "@testing-library/jest-dom";

// It will fail since jsdom doesn't understand react-redux/react-router,
// so we need to wrap both providers for the header component.
it("Should load header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  // getByRole is a better option
  const loginButton = screen.getByRole("button", { name: "Login" });
  // const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

test("Should render header component with cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const cartItems = screen.getByText(/Cart/); // you can add regex as well
  expect(cartItems).toBeInTheDocument();
});

it("Should change button between login to logout onClick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);

  const logout = screen.getByRole("button", { name: "Logout" });
});
