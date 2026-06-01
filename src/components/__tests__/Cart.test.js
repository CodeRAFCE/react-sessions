import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import MOCK_DATA from "../../__mock__/restaurantById.json";
import RestaurantMenu from "../RestaurantMenu";
import appStore from "../../utils/redux/store";
import { clearCart } from "../../utils/redux/slices/cartSlice";

import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../../pages/Cart";

// Performing a fake fetch call similar to how the fetch works in the browser.;
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

beforeEach(() => {
  appStore.dispatch(clearCart());
  localStorage.clear();
});

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    ),
  );

  const accordianHeader = screen.getByText("Veggie Burgers");
  fireEvent.click(accordianHeader);

  const menuItems = screen.getAllByTestId("menu-items");
  expect(menuItems.length).toBe(2);

  const addBtns = screen.getAllByTestId("add-to-cart-btn");
  fireEvent.click(addBtns[0]);

  //   const incrementQty = screen.getByRole("button", { name: "+" });
  //   fireEvent.click(incrementQty);

  //   const incrementedQtyCounter = screen.getByTestId("qty-counter-value");

  //   expect(incrementedQtyCounter.textContent).toBe("2");

  //   const decrementQty = screen.getByRole("button", { name: "−" });
  //   fireEvent.click(decrementQty);

  //   const decrementedQtyCounter = screen.getByTestId("qty-counter-value");
  //   expect(decrementedQtyCounter.textContent).toBe("1");

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart (2)")).toBeInTheDocument();

  const cartItems = screen.getAllByTestId("cart-items");
  expect(cartItems.length).toBe(2);
});
