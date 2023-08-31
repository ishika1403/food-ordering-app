"use client";
import styles from "./index.module.css";
import Link from "next/link";
import Filter from "./components/Filter";
import RestaurantList from "./components/RestaurantList";

const LandingPage = ({ data }) => {
  return (
    <>
      <Link href="/favourites">Go to Fav</Link>
      <div className={styles.container}>
        {/* Filters */}
        <Filter data={data} />
        {/* Restaurants */}
        <RestaurantList data={data} />
      </div>
    </>
  );
};

export default LandingPage;
