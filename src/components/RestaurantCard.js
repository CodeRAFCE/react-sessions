import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRatingString,
  sla,
  areaName,
  costForTwo,
  aggregatedDiscountInfoV3,
}) => (
  <div className="res-card">
    <div className="res-card-img-wrapper">
      <img
        className="res-card-img"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      {aggregatedDiscountInfoV3 && (
        <div className="res-card-discount">
          <span>{aggregatedDiscountInfoV3.header}</span>
          <span className="discount-sub">
            {aggregatedDiscountInfoV3.subHeader} hi
          </span>
        </div>
      )}
    </div>
    <div className="res-card-body">
      <h3>{name}</h3>
      <p className="cuisine">{cuisines?.join(", ")}</p>
      <p className="area">{areaName}</p>
      <div className="res-card-footer">
        <span className="rating">{avgRatingString}</span>
        <span className="delivery-time">{sla?.slaString}</span>
        <span className="cost">{costForTwo}</span>
      </div>
    </div>
  </div>
);

// Higher Order Component
// input - RestaurantCard => returns - RestaurantCardWithVegBadge

export const withVegBadge = (RestaurantCard) => (props) => {
  return (
    <div className="res-card-veg">
      <span className="veg-badge">🟢 Pure Veg</span>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
