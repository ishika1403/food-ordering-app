"use client";
import styles from "./index.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Restaurant from "../Home/components/Restaurant";

const FavouritesPage = () => {
  const data = useSelector((store) => store.favourites);
  return (
    <div className={styles.container}>
      {data.length > 0 ? (
        <>
          <div className={styles.headerContainer}>
            <h2>Favourites</h2>
          </div>

          <div className={styles.bodyContainer}>
            {data.map((restaurant) => {
              return <Restaurant key={restaurant.id} restaurant={restaurant} />;
            })}
          </div>
        </>
      ) : (
        <div className={styles.emptyStateContainer}>
          <h3>Oops 🥺...No favourites found!</h3>
          <Link href="/">
            <button className={styles.btn}>Add some today 🎉</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavouritesPage;
