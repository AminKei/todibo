import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../Pages/Allproduct/useProducts";


const initialState: Product[] = [];

 
const simple = createSlice({
    name: "simple",
    initialState, 
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state = action.payload
        },
      
    }
})

export const { setProducts } = simple.actions;
export default simple.reducer;