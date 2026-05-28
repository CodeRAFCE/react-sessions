import { CDN_URL } from "../utils/constants";
import { getRestaurantById } from "../services/restaurants.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useRestaurantMenu } from "../utils/hooks/useRestaurantMenu";
import MenuItem, { MenuShimmer } from "./MenuItem";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(0);
  const { resId } = useParams();
  const { restaurant, menuCategory, loading } = useRestaurantMenu(resId);

  if (loading) {
    return <MenuShimmer />;
  }

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <h1 className="menu-res-name">{restaurant?.name}</h1>
        <p className="menu-cuisines">{restaurant?.cuisines?.join(", ")}</p>
        <div className="menu-meta">
          <span className="rating">{restaurant?.avgRatingString}</span>
          <span className="menu-meta-chip">{restaurant?.sla?.slaString}</span>
          <span className="menu-meta-chip">{restaurant?.costForTwo}</span>
          <span className="menu-meta-chip">{restaurant?.areaName}</span>
        </div>
      </div>

      <div className="menu-categories">
        {menuCategory.map((category, i) => (
          <RestaurantCategory
            key={category?.title}
            showItems={i === showItems ? true : false}
            setShowItems={() => setShowItems((prev) => (prev === i ? null : i))}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
