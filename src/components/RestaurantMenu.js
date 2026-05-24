import { CDN_URL } from "../utils/constants";
import { getRestaurantById } from "../services/restaurants.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const MenuShimmer = () => (
  <div className="menu-page">
    <div className="menu-hero">
      <div
        className="shimmer"
        style={{ width: "40%", height: "32px", marginBottom: "12px" }}
      />
      <div
        className="shimmer"
        style={{ width: "55%", height: "16px", marginBottom: "20px" }}
      />
      <div style={{ display: "flex", gap: "12px" }}>
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="shimmer"
              style={{ width: "80px", height: "28px", borderRadius: "20px" }}
            />
          ))}
      </div>
    </div>
    {Array(3)
      .fill(null)
      .map((_, i) => (
        <div key={i} className="menu-category">
          <div
            className="shimmer"
            style={{ width: "200px", height: "22px", marginBottom: "16px" }}
          />
          {Array(4)
            .fill(null)
            .map((_, j) => (
              <div key={j} className="menu-item">
                <div style={{ flex: 1 }}>
                  <div
                    className="shimmer"
                    style={{
                      width: "60%",
                      height: "18px",
                      marginBottom: "10px",
                    }}
                  />
                  <div
                    className="shimmer"
                    style={{
                      width: "25%",
                      height: "14px",
                      marginBottom: "10px",
                    }}
                  />
                  <div
                    className="shimmer"
                    style={{ width: "80%", height: "12px" }}
                  />
                </div>
                <div className="shimmer menu-item-img" />
              </div>
            ))}
        </div>
      ))}
  </div>
);

const MenuItem = ({ item }) => {
  const price = (item.price || item.defaultPrice) / 100;
  const isVeg = item.isVeg === 1;

  return (
    <div className="menu-item">
      <div className="menu-item-info">
        <span className={isVeg ? "veg-dot" : "nonveg-dot"} />
        <h3 className="menu-item-name">{item.name}</h3>
        <p className="menu-item-price">₹{price}</p>
        {item.description && (
          <p className="menu-item-desc">{item.description}</p>
        )}
      </div>
      {item.imageId && (
        <img
          className="menu-item-img"
          src={CDN_URL + item.imageId}
          alt={item.name}
        />
      )}
    </div>
  );
};

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuCategory, setMenuCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { resId } = useParams();

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const { restaurantInfo, menuCategories } =
          await getRestaurantById(resId);
        setRestaurant(restaurantInfo);
        setMenuCategory(menuCategories);
      } catch (error) {
        console.log("Error fetching restaurant data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, []);

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
          <div key={i} className="menu-category">
            <h2 className="category-title">
              {category?.title}
              <span className="category-count">({category?.items.length})</span>
            </h2>
            <div className="menu-items">
              {category?.items.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
