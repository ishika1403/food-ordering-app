import Link from "next/link";
import styles from "./emptycart.module.css";

const EmptyCart = () => {
  return (
    <div className={styles.emptyStateContainer}>
      <h3>Oops 🥺...No item in your cart!</h3>
      <Link href="/">
        <button className={styles.btn}>Add some now 🎉</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
