import styles from "./menuItem.module.css";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/features/cart-slice";
import { useSession } from "next-auth/react";

const MenuItem = ({ data, restaurant }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { status } = useSession();

  const handleQtyDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleQtyIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (status === "unauthenticated") {
      alert("Sign in to Add to Cart!");
    } else {
      const payload = {
        ...restaurant,
        items: [
          {
            ...data,
            quantity,
          },
        ],
      };

      dispatch(addItem(payload));
    }
  };

  return (
    <div className={styles.menuItem}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
          alt="food item"
          fill
          objectFit="cover"
        />
      </div>
      <div style={{ width: "100%" }}>
        <div className={styles.detailsContainer}>
          <h4>{data.item_name}</h4>
          <p>{`Rating: ${data.item_rating} star(s)`}</p>
          <p>{`Price: ₹${data.item_price}`}</p>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.cartBtn} onClick={handleAddToCart}>
            {status === "loading" ? "Authenticating..." : "Add to Cart"}
          </button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid grey",
              borderRadius: "7px",
            }}
          >
            <button
              className={styles.qtyBtn}
              onClick={() => {
                handleQtyDecrement();
              }}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className={styles.qtyBtn}
              onClick={() => {
                handleQtyIncrement();
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
