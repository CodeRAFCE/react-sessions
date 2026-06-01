import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import Body from "../Body";
import MOCK_DATA from "../../__mock__/restaurants.json";

import "@testing-library/jest-dom";

// Performing a fake fetch call similar to how the fetch works in the browser.
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should render body component with search bar", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );
  const searchInput = screen.getByTestId("search-input");
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const resCardsAll = screen.getAllByTestId("restaurant-card");

  expect(resCardsAll.length).toBe(9);

  fireEvent.change(searchInput, { target: { value: "Pizza" } });
  fireEvent.click(searchBtn);

  const resCardsFiltered = screen.getAllByTestId("restaurant-card");
  expect(resCardsFiltered.length).toBe(1);
});
