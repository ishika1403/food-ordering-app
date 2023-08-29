import styles from "./filterOptions.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter, resetFilter } from "@/redux/features/filter-slice";

const FilterOptions = ({ filter }) => {
  const [checked, setChecked] = useState([]);
  const dispatch = useDispatch();
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
      <h3>{filter.name}</h3>
      <ul>
        {filter.values.map((v, i) => {
          return (
            <li key={i}>
              <div>
                <input
                  type="checkbox"
                  id={`${filter.name}-${v}`}
                  name={v}
                  value={v}
                  checked={checked.includes(v)}
                  onChange={handleOptionChange}
                />
                <label htmlFor={`${filter.name}-${v}`}>{v}</label>
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
