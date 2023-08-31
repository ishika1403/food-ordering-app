import styles from "./filter.module.css";
import { useState, useMemo } from "react";
import FilterOptions from "./FilterOptions";

const Filter = ({ data }) => {
  const filters = useMemo(() => {
    let customFilters = [
      {
        name: "rating",
        title: "Rating",
        values: [],
      },

      {
        name: "city",
        title: "City",
        values: [],
      },
      {
        name: "cuisine",
        title: "Cuisine",
        values: [],
      },
    ];

    customFilters.forEach((filter, index) => {
      const filterCount = new Map();

      data.forEach((restaurant) => {
        if (filterCount.has(restaurant[filter.name])) {
          const currentCount = filterCount.get(restaurant[filter.name]);
          filterCount.set(restaurant[filter.name], currentCount + 1);
        } else filterCount.set(restaurant[filter.name], 1);
      });

      const mapEntries = filterCount.entries();

      let i = 0;
      for (const entry of mapEntries) {
        customFilters[index].values[i] = entry;
        i++;
      }
    });

    return customFilters;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2>Filter</h2>
        <span>Check multiple boxes below to narrow restaurants results</span>
      </div>
      {filters.map((filter, index) => {
        return <FilterOptions key={index} filter={filter} />;
      })}
    </div>
  );
};

export default Filter;
