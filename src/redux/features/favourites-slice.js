import { createSlice } from "@reduxjs/toolkit";

export const favouritesSlice = createSlice({
  name: "favourites",
  /**
   * [{restaurant Object}]
   */
  initialState: [],
  reducers: {
    addFavourite: function (state, action) {
      const restaurantObj = action.payload;
      console.log("obj : ", restaurantObj);
      state.push(restaurantObj);
    },

    deleteFavourite: function (state, action) {
      const restaurantObj = action.payload;
      return state.filter((restaurant) => restaurant.id !== restaurantObj.id);
    },
  },
});

export const { addFavourite, deleteFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
