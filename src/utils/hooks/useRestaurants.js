import { useEffect, useState } from "react";
import { getRestaurants } from "../../services/restaurants.service";

const useRestaurants = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allRes, setAllRes] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
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

  const handleClickSearch = () => {
    const newRes = restaurants?.filter((r) =>
      r?.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    // Here the new filtered list is set to restaurants state,
    // which will trigger a re-render and show the filtered results.
    // But the problem: you are storing the filtered result in the restaurants state,
    // On the next search, you are try to filter out the value from the already filtered restaurants.
    // This is the reason why you get an empty array on the second search.
    // to fix this you can either maintain a separate state for the original list of restaurants and the filtered list, or you can filter the original list of restaurants every time based on the search query.
    // setRestaurants(newRes);
    console.log(newRes);
    setFilteredRestaurants(newRes);
  };

  return {
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
  };
};

export default useRestaurants;
