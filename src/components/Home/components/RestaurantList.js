import styles from "./restaurantList.module.css";
import { useSelector } from "react-redux";
import Restaurant from "./Restaurant";
import { useMemo } from "react";

const RestaurantList = ({ data }) => {
  const filters = useSelector((state) => state.filter);
  const restaurants = useMemo(() => {
    let filteredRestaurants = Array.from(data);

    if (filters.length === 0) {
      return data;
    } else {
      filters.forEach((filter) => {
        filteredRestaurants = filteredRestaurants.filter((r) =>
          filter.values.includes(r[filter.name].toString())
        );
      });
      return filteredRestaurants;
    }
  }, [filters]);

  // console.log("Filters", filters);
  // console.log("Restaurants :", restaurants);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2>Restaurants</h2>
      </div>
      <div className={styles.bodyContainer}>
        {restaurants.length > 0 &&
          restaurants.map((restaurant) => {
            return <Restaurant key={restaurant.id} restaurant={restaurant} />;
          })}
      </div>
    </div>
  );
};

export default RestaurantList;
