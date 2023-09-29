import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoriesSlice";
import modalSlice from "./modalSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    modal: modalSlice,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
