const { render, screen } = require("@testing-library/react");
import RestaurantCard, { withVegBadge } from "../RestaurantCard";

import MOCK_DATA from "../../__mock__/restaurant.json";

import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard {...MOCK_DATA} />);

  const resName = screen.getByText(MOCK_DATA.name);
  expect(resName).toBeInTheDocument();
});

test("Should render RestaurantCard HOC component with isVeg label", () => {
  const VegRestaurantCard = withVegBadge(RestaurantCard);

  render(<VegRestaurantCard {...MOCK_DATA} />);

  const resName = screen.getByText("🟢 Pure Veg");
  expect(resName).toBeInTheDocument();
});
