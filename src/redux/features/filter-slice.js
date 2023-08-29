import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: [],
  reducers: {
    updateFilter: function (state, action) {
      const obj = action.payload;
      const existingIndex = state.findIndex((ele) => ele.name === obj.name);

      if (existingIndex !== -1) {
        state.splice(existingIndex, 1);
      }

      state.push(obj);
    },
    resetFilter: function (state, action) {
      const filterName = action.payload;
      return state.filter((ele) => ele.name !== filterName);
    },
  },
});

export const { updateFilter, resetFilter } = filterSlice.actions;

export default filterSlice.reducer;
