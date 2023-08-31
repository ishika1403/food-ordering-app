"use client";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import Image from "next/image";
import CartItem from "./components/CartItem";
import EmptyCart from "./components/EmptyCart";

const CartPage = () => {
  const cartData = useSelector((store) => store.cart);
  console.log("Cart D ", cartData);
  return (
    <div>
      <div className={styles.container}>
        {/* Cart Body */}
        {!cartData.id ? (
          <EmptyCart />
        ) : (
          <>
            <div className={styles.headerContainer}>
              <h1>Cart</h1>
            </div>
            <div className={styles.cartBodyContainer}>
              {/* Added Items in Cart */}
              <div className={styles.cartItemsContainer}>
                <h2>{cartData.name}</h2>
                <div>
                  {cartData.items.map((item, index) => {
                    return <CartItem data={item} key={item.id} />;
                  })}
                </div>
              </div>

              {/* Total Bill */}
              <div className={styles.billContainer}>
                <h2>Bill Details</h2>
                <div className={styles.billDetailsContainer}>
                  {/* Bill heads */}
                  <div className={styles.billHeadsContainer}>
                    <div>
                      <span>Total price</span>
                      <span>{`₹${cartData.totalPrice}`}</span>
                    </div>
                    <div>
                      <span>Delivery</span>
                      <span>Free</span>
                    </div>
                  </div>

                  {/* Final amount */}
                  <div className={styles.billTotalContainer}>
                    <div>
                      <span>Total Amount</span>
                      <span>{`₹${cartData.totalPrice}`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
