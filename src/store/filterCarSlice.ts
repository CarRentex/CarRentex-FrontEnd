import { createSlice } from "@reduxjs/toolkit";

const filterCarSlice = createSlice({
  name: "filterCar",
  initialState: {
    isfilterCar: false,
    minPrice: 0,
    maxPrice: 0,
    brand: 0,
    model: 0,
  },
  reducers: {
    filterSuccess: (state, action) => {
      return {
        ...state,
        isfilterCar: true,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
        brand: action.payload.brand,
        model: action.payload.model,
      };
    },
  },
});

export const { filterSuccess } = filterCarSlice.actions;
export default filterCarSlice.reducer;
