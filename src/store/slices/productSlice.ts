import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state

interface ProductProps {
  id?: number;
  title: string;
  description: string;
  price: number;
}

interface ProductState {
  products: ProductProps[];
  basket: ProductProps[];
}

// Define the initial state using that type
const initialState: ProductState = {
  products: [
    { id: 1, title: "Ürün 1", description: "Example Desc", price: 5500 },
    { id: 2, title: "Ürün 2", description: "Example Desc", price: 5500 },
  ],
  basket: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductProps>) => {
      // state.products.push(action.payload);
      const newArray = [...state.products, action.payload];
      return { ...state, products: newArray };
    },
    toggleBasket: (state, action: PayloadAction<ProductProps>) => {
      const isSome = state.basket.some((item) => item.id === action.payload.id);
      if (isSome) {
        const newBasket = state.basket.filter(
          (x) => x.id !== action.payload.id
        );
        return { ...state, basket: newBasket };
      } else {
        const newArray = [...state.basket, action.payload];
        return { ...state, basket: newArray };
      }
    },
  },
});

export const { addProduct, toggleBasket } = productSlice.actions;

export default productSlice.reducer;
