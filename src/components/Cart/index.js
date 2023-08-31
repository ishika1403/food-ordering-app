"use client";
import styles from "./index.module.css";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartData = useSelector((store) => store.cart);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1>Cart</h1>
        </div>

        {/* Cart Body */}
        <div className={styles.cartBodyContainer}>
          {/* Added Items in Cart */}
          <div className={styles.cartItemsContainer}>
            <h2>{cartData.name}</h2>
          </div>
          {/* Total Bill */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
