import {
  addFavourite,
  deleteFavourite,
} from "@/redux/features/favourites-slice";
import styles from "./restaurant.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/react";

const Restaurant = ({ restaurant }) => {
  const dispatch = useDispatch();
  const favouritesState = useSelector((state) => state.favourites);

  const { status } = useSession();

  const isFavourite = useMemo(() => {
    return favouritesState.some((r) => r.id === restaurant.id);
  }, [favouritesState]);

  const handleFavBtnClick = () => {
    if (status === "unauthenticated") {
      alert("Sign in to Add to Favourites!");
    } else {
      if (!isFavourite) {
        dispatch(addFavourite(restaurant));
      } else {
        dispatch(deleteFavourite(restaurant));
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* Image container */}
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt="Picture of the rest"
          fill
          objectFit="cover"
        />
      </div>

      {/* Details container */}
      <div className={styles.detailContainer}>
        <h3>{restaurant.name}</h3>
        <h4>{`Rating : ${restaurant.rating} star(s)`}</h4>
        <div className={styles.btnContainer}>
          <button
            className={isFavourite ? styles.favBtnSelected : styles.favBtn}
            onClick={handleFavBtnClick}
            disabled={status === "loading"}
          >
            {status === "loading"
              ? "Authenticating..."
              : isFavourite
              ? "Remove Favourite"
              : "Add Favourite"}
          </button>
          <Link href={`/restaurants/${restaurant.id}/menu`}>
            <button className={styles.menuBtn}>Menu</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
