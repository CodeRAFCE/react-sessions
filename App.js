import React from "react";
import ReactDOM from "react-dom/client";

const restaurants = [
  {
    id: 1,
    name: "The Burger Joint",
    cuisine: "American · Burgers",
    rating: "4.5",
    deliveryTime: "25–30",
    imgUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Pizza Palace",
    cuisine: "Italian · Pizza",
    rating: "4.3",
    deliveryTime: "30–40",
    imgUrl:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Sushi World",
    cuisine: "Japanese · Sushi",
    rating: "4.7",
    deliveryTime: "35–45",
    imgUrl:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Spice Garden",
    cuisine: "Indian · Curry",
    rating: "4.4",
    deliveryTime: "30–40",
    imgUrl:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Taco Fiesta",
    cuisine: "Mexican · Tacos",
    rating: "4.2",
    deliveryTime: "20–30",
    imgUrl:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=200&fit=crop",
  },
  {
    id: 6,
    name: "Pho Saigon",
    cuisine: "Vietnamese · Noodles",
    rating: "4.6",
    deliveryTime: "25–35",
    imgUrl:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=200&fit=crop",
  },
];

const Header = () => (
  <div className="header">
    <img
      className="logo"
      src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg"
      alt="FoodApp logo"
    />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestaurantCard = ({ name, cuisine, rating, deliveryTime, imgUrl }) => (
  <div className="res-card">
    <img className="res-card-img" src={imgUrl} alt={name} />
    <div className="res-card-body">
      <h3>{name}</h3>
      <p className="cuisine">{cuisine}</p>
      <div className="res-card-footer">
        <span className="rating">{rating}</span>
        <span className="delivery-time">{deliveryTime} mins</span>
      </div>
    </div>
  </div>
);

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
      {restaurants.map((r) => (
        <RestaurantCard key={r.id} {...r} />
      ))}
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
