import { API_URL } from "../utils/constants";

export const getRestaurants = async () => {
  const response = await fetch(`${API_URL}/listRestaurants`);
  const json = await response.json();
  const restaurants =
    json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  return restaurants?.map((r) => r.info) ?? [];
};

export const getRestaurantById = async (id) => {
  const response = await fetch(`${API_URL}/listRestaurantMenu/${id}`);
  const json = await response.json();
  const items = json?.data?.cards ?? null;

  const restaurantInfo = items[2]?.card?.card?.info ?? null;
  const menuCards = items[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? null;

  const menuCategories =
    menuCards?.reduce((accumulator, current) => {
      if (current?.card?.card?.itemCards) {
        accumulator.push({
          title: current?.card?.card?.title,
          items: current?.card?.card?.itemCards?.map((f) => f?.card?.info),
        });
      }

      return accumulator;
    }, []) ?? [];

  return { restaurantInfo, menuCategories };
};
