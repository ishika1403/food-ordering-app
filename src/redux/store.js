import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./features/filter-slice";
import favouritesReducer from "./features/favourites-slice";
import cartReducer from "./features/cart-slice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    favourites: favouritesReducer,
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
