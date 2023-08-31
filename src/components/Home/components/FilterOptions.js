import styles from "./filterOptions.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter, resetFilter } from "@/redux/features/filter-slice";

const FilterOptions = ({ filter }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([]);
  const filterState = useSelector((state) => state.filter);

  useEffect(() => {
    if (checked.length > 0) {
      dispatch(updateFilter({ name: filter.name, values: checked }));
    }

    if (checked.length === 0) {
      dispatch(resetFilter(filter.name));
    }
  }, [checked]);

  const handleOptionChange = (e) => {
    if (checked.includes(e.target.value)) {
      const arr = checked.filter((ele) => ele !== e.target.value);
      setChecked([...arr]);
    } else {
      setChecked([...checked, e.target.value]);
    }
  };

  return (
    <div className={styles.container}>
      <h3>{filter.title}</h3>
      <ul>
        {filter.values.map((value, i) => {
          const filterValue = value[0];
          const filterValueCount = value[1];

          return (
            <li key={i}>
              <div>
                <input
                  type="checkbox"
                  id={`${filter.name}-${filterValue}`}
                  name={filter.name}
                  value={filterValue}
                  checked={checked.includes(filterValue.toString())}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor={`${filter.name}-${filterValue}`}
                >{`${filterValue} (${filterValueCount})`}</label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterOptions;

/**
 * {
 * name:filter name
 * values:[1,2]
 * }
 */

/**
 * {
 * name:filter name
 * values:[1,2]
 * }
 */
