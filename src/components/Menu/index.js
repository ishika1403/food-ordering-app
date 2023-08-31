"use client";

import styles from "./index.module.css";
import { signOut } from "next-auth/react";
import MenuItem from "./components/MenuItem";
import Link from "next/link";

const MenuPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <button onClick={() => signOut()}>Sign out</button>
      <Link href="/cart">Go to Cart</Link>
      {/* header with restaurant name */}
      <div className={styles.headerContainer}>
        <h1>{data.name}</h1>
        <span>{`Rating : ${data.rating} star(s)`}</span>
      </div>

      {/* menu container */}
      <div className={styles.menuContainer}>
        <h2>Menu</h2>
        <div className={styles.menuItemContainer}>
          {data.menu_items.map((item) => {
            return (
              <MenuItem
                key={item.id}
                data={item}
                restaurant={{
                  id: data.id,
                  name: data.name,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
