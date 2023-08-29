import styles from "./filter.module.css";
import { useState } from "react";
import FilterOptions from "./FilterOptions";

const Filter = () => {
  const filters = [
    {
      name: "Rating",
      values: ["1", "2", "3", "4", "5"],
    },

    {
      name: "Cuisine",
      values: ["a", "b", "c", "d"],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2>Filter</h2>
        <span>Check multiple boxes below to narrow restaurants results</span>
      </div>
      {filters.map((filterObj, index) => {
        return <FilterOptions key={index} filter={filterObj} />;
      })}
    </div>
  );
};

export default Filter;
