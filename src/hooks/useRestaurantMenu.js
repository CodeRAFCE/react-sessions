import { useEffect, useState } from "react";
import { getRestaurantById } from "../services/restaurants.service";

export const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuCategory, setMenuCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    try {
      const { restaurantInfo, menuCategories } = await getRestaurantById(resId);
      setRestaurant(restaurantInfo);
      setMenuCategory(menuCategories);
    } catch (error) {
      console.log("Error fetching restaurant data:", error);
    } finally {
      setLoading(false);
    }
  };

  return { restaurant, menuCategory, loading };
};
