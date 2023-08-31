"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { status } = useSession();
  const router = useRouter();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleAuthentication = () => {
    setIsOpen(false);
    if (status === "authenticated") {
      signOut();
    } else {
      router.push("/auth/signin");
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Fast Order</Link>
      </div>
      <div
        onClick={toggleNavbar}
        className={`${styles.menuIcon} ${isOpen ? styles.open : ""}`}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <div className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/favourites">Favorites</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
        {status !== "loading" && (
          <button
            className={styles.signInButton}
            onClick={handleAuthentication}
          >
            {status === "authenticated" ? "Sign out" : "Sign In"}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
