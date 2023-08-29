import styles from "./restaurantList.module.css";
import Restaurant from "./Restaurant";

const RestaurantList = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2>Restaurants</h2>
      </div>
      <div className={styles.bodyContainer}>
        {data.map((restaurant) => {
          return <Restaurant key={restaurant.id} restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantList;
