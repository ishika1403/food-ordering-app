import styles from "./cartitem.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  increaseItemQty,
  decreaseItemQty,
  deleteItem,
} from "@/redux/features/cart-slice";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (data.quantity === 1) {
      handleRemove();
    } else {
      dispatch(decreaseItemQty(data.id));
    }
  };

  const handleIncrease = () => {
    dispatch(increaseItemQty(data.id));
  };

  const handleRemove = () => {
    dispatch(deleteItem(data.id));
  };

  return (
    <div className={styles.menuItem}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt="Picture of the rest"
          fill
          objectFit="cover"
        />
      </div>
      <div style={{ width: "100%" }}>
        <div className={styles.detailsContainer}>
          <h4>{data.item_name}</h4>
          <p>{`Rating: ${data.item_rating} star(s)`}</p>
          <p>{`Price: ₹${data.item_price * data.quantity}`}</p>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.cartBtn} onClick={handleRemove}>
            Remove
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
            <button className={styles.qtyBtn} onClick={handleDecrease}>
              -
            </button>
            <span>{data.quantity}</span>
            <button className={styles.qtyBtn} onClick={handleIncrease}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
