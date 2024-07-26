import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        style={{ color: "#867eb5", fontSize: "0.8rem" }}
        href="/blog/categories?cat=coding"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Coding
      </Link>
      <Link
        style={{ color: "#867eb5", fontSize: "0.8rem" }}
        href="/blog/categories?cat=cybersecurity"
        className={`${styles.categoryItem} ${styles.fashion}`}
      >
        Security
      </Link>
      <Link
        style={{ color: "#867eb5", fontSize: "0.8rem" }}
        href="/blog/categories?cat=technews"
        className={`${styles.categoryItem} ${styles.food}`}
      >
        Tech News
      </Link>
      <Link
        style={{ color: "#867eb5", fontSize: "0.8rem" }}
        href="/blog/categories?cat=productivity"
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        Productivity
      </Link>
    </div>
  );
};

export default MenuCategories;
