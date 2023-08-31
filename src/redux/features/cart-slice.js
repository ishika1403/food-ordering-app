import { createSlice } from "@reduxjs/toolkit";

function calcTotalPrice(items) {
  let total = 0;
  items.forEach((item) => {
    total += item.quantity * item.item_price;
  });
  return total;
}

function update(state, payload) {
  const item = payload.items[0];
  const prevStateItems = state.items;
  const itemExists = prevStateItems.some((i) => i.id === item.id);
  console.log("IE : ", itemExists);
  let newItems = null;
  if (itemExists) {
    newItems = prevStateItems.filter((i) => i.id !== item.id);
    const prevStateItemCount = prevStateItems.filter((i) => i.id === item.id);
    newItems.push({
      ...item,
      quantity: prevStateItemCount[0].quantity + item.quantity,
    });
  } else {
    // prevStateItems.push(item);
    const copyPrevStateItems = [...prevStateItems];
    copyPrevStateItems.push(item);
    newItems = Array.from(copyPrevStateItems);
  }
  const totalPrice = calcTotalPrice(newItems);

  return { ...payload, items: newItems, totalPrice };
}

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    name: null,
    id: null,
    items: [],
    totalPrice: 0,
  },
  /**
   * {
   *    name : "Restaurant name",
   *    id:restaurant id,
   *    items:[{itemName,itemId,itemQty,unitPrice}]
   *    totalPrice-
   * }
   */
  reducers: {
    addItem: function (state, action) {
      let totalPrice = null;

      //   Case 1 : When cart is empty
      if (!state.id) {
        totalPrice = calcTotalPrice(action.payload.items);
        alert("Added to cart from empty!");
        console.log("st : ", { ...action.payload, totalPrice });
        return { ...action.payload, totalPrice };
      }

      //   Case 2: When cart is not empty
      // Case 2a:When item exists
      // Case 2b:When item does not exists
      if (state.id === action.payload.id) {
        const updatedPayload = update(state, action.payload);
        alert("Added to cart!");
        return { ...updatedPayload };
      } else {
        alert("Cart cannot have items from different Restaurants");
      }
    },
    decreaseItemQty: function (state, action) {},
    increaseItemQty: function (state, action) {},
    deleteItem: function (state, action) {},
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
