import { restaurants } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => (
  <div className="body">
    <div className="search-section">
      <h2>What are you craving?</h2>
      <p>Discover the best food &amp; drinks near you</p>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for restaurants or cuisines..."
        />
        <button>Search</button>
      </div>
    </div>

    <h2 className="res-section-title">Top Restaurants</h2>
    <div className="res-container">
      {restaurants?.map((r) => (
        <RestaurantCard key={r.id} {...r} />
      ))}
    </div>
  </div>
);

export default Body;