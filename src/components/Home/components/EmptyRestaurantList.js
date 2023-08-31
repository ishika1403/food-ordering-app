import styles from "./emptyrestaurantlist.module.css";

const EmptyRestaurantList = () => {
  return (
    <div className={styles.emptyStateContainer}>
      <h3>No match for your filters🥺</h3>
    </div>
  );
};

export default EmptyRestaurantList;
