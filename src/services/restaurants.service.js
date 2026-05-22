import { API_URL } from "../utils/constants";

export const getRestaurants = async () => {
  const response = await fetch(`${API_URL}/listRestaurants`);
  const json = await response.json();
  const restaurants =
    json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  return restaurants?.map((r) => r.info) ?? [];
};