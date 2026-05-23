import { useState, useEffect } from "react";
import { Link } from "react-router";
import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard";
import { getRestaurants } from "../services/restaurants.service";
import { restaurants as mockRestaurants } from "../utils/mockData";

const Body = () => {
  const [allRes, setAllRes] = useState([])
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants();
        setAllRes(data);
        setRestaurants(data);
        setFilteredRestaurants(data);
      } catch (err) {
        setError("Unable to load restaurants. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const handleTopRatedRestaurants = () => {
    const topRated = restaurants.filter((r) => r.avgRating > 4.5);
    setFilteredRestaurants(topRated);
  };

  const handleShowAll = () => {
    setFilteredRestaurants(allRes); // This will reset the restaurants state to the original list of restaurants, which will trigger a re-render and show all the restaurants.
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleClickSearch = () => {
    const newRes = restaurants?.filter((r) => r?.name.toLowerCase().includes(searchQuery.toLowerCase()));
    // Here the new filtered list is set to restaurants state, 
    // which will trigger a re-render and show the filtered results.
    // But the problem: you are storing the filtered result in the restaurants state,
    // On the next search, you are try to filter out the value from the already filtered restaurants.
    // This is the reason why you get an empty array on the second search.
    // to fix this you can either maintain a separate state for the original list of restaurants and the filtered list, or you can filter the original list of restaurants every time based on the search query.
    // setRestaurants(newRes); 
    console.log(newRes)
    setFilteredRestaurants(newRes);
  };

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
            onClick={() => window.location.reload()}
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
                <Link key={r.id} to={`/restaurant/${r.id}`} className="res-card-link">
                  <RestaurantCard {...r} />
                </Link>
              ))}
        </div>
      )}
    </div>
  );
};

export default Body;
