import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const addCard = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action) {
            state.push(action.payload);
    },
    updateProduct(state, action) {
      const { id, name, price } = action.payload;
      const product = state.find((product) => product.id === id);
      if (product) {
        product.name = name;
        product.price = price;
      }
    },
    removeProduct(state, action) {
      const id = action.payload;
      return state.filter((product) => product.id !== id);
    },
    clearProducts(state) {
      return [];
    },
  },
});

export const { addProduct, updateProduct, removeProduct, clearProducts } = addCard.actions;
export default addCard.reducer;