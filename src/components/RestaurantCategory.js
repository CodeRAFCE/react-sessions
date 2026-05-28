import React, { useState } from "react";
import MenuItem from "./MenuItem";

const RestaurantCategory = ({ category, showItems, setShowItems }) => {
  const handleToggleMenuItems = () => {
    setShowItems();
  };

  return (
    <div
      className="menu-category"
      aria-label={`Toggle ${category?.title} items`}
      aria-expanded={showItems}
      onClick={handleToggleMenuItems}
    >
      <div className="menu-category-header">
        <h2 className="category-title">
          {category?.title}
          <span className="category-count">({category?.items.length})</span>
        </h2>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </div>

      {showItems && (
        <div className="menu-items">
          {category?.items.map((item) => (
            <MenuItem key={item?.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
