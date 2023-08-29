import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./features/filter-slice";
import favouritesReducer from "./features/favourites-slice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    favourites: favouritesReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
