"use client";
import styles from "./index.module.css";
import Filter from "./components/Filter";
import RestaurantList from "./components/RestaurantList";

const LandingPage = ({ data }) => {
  return (
    <>
      <div className={styles.container}>
        {/* Filters */}
        <Filter />
        {/* Restaurants */}
        <RestaurantList data={data} />
      </div>
    </>
  );
};

export default LandingPage;
