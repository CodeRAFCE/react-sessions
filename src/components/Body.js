import { useState, useEffect } from "react";
import { Link } from "react-router";
import RestaurantCard, { withVegBadge } from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard";
import useRestaurants from "../utils/hooks/useRestaurants";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {
  const {
    allRes,
    restaurants,
    filteredRestaurants,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    handleTopRatedRestaurants,
    handleShowAll,
    handleClickSearch,
  } = useRestaurants();

  const onlineStatus = useOnlineStatus();

  const VegRestaurantCard = withVegBadge(RestaurantCard);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  if (onlineStatus === false) {
    return (
      <div className="offline-state">
        <h2>You are currently offline.</h2>
        <p>Please check your internet connection and try again.</p>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="search-section">
        <h2>What are you craving?</h2>
        <p>Discover the best food &amp; drinks near you</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for restaurants or cuisines..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button onClick={handleClickSearch}>Search</button>
        </div>
      </div>

      <div className="filter-section">
        <button
          className="filter-btn filter-btn--primary"
          onClick={handleTopRatedRestaurants}
        >
          Top Rated
        </button>
        <button
          className="filter-btn filter-btn--ghost"
          onClick={handleShowAll}
        >
          Show All
        </button>
      </div>

      <h2 className="res-section-title">Top Restaurants</h2>
      {error ? (
        <div className="error-state">
          <p>{error}</p>
          <button
            className="filter-btn filter-btn--primary"
            onClick={() => handleShowAll()}
          >
            Retry
          </button>
        </div>
      ) : filteredRestaurants.length === 0 || restaurants.length === 0 ? (
        <div className="no-results">
          <p>No restaurants found matching your criteria.</p>
          <button
            className="filter-btn filter-btn--primary"
            onClick={handleShowAll}
          >
            Show All Restaurants
          </button>
        </div>
      ) : (
        <div className="res-container">
          {loading
            ? Array(8)
                .fill(null)
                .map((_, i) => <ShimmerCard key={i} />)
            : filteredRestaurants.map((r) => (
                <Link
                  key={r.id}
                  to={`/restaurant/${r.id}`}
                  className="res-card-link"
                >
                  {/* If the restaurant has a veg as true, display a veg */}
                  {/* if my r.data.veg is true use the new component VegRestaurantCard else use the regular RestaurantCard */}
                  {r.veg ? (
                    <VegRestaurantCard {...r} />
                  ) : (
                    <RestaurantCard {...r} />
                  )}
                </Link>
              ))}
        </div>
      )}
    </div>
  );
};

export default Body;
