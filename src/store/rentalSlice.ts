import { createSlice , PayloadAction} from "@reduxjs/toolkit";

export interface RentalState {
    startDate: string;
    endDate: string;
    carId: number;
    picklocationId: number;
    droplocationId: number;
  }

    const initialRentalState: RentalState = {
        startDate: "",
        endDate: "",
        carId: 0,
        picklocationId: 0,
        droplocationId: 0,
    };

export const rentalSlice = createSlice({
    name: "rental",
    initialState: initialRentalState,
    reducers: {
      handleStartDate(state: RentalState, action: PayloadAction<string>) {
        state.startDate = action.payload;
      },
      handleEndDate(state: RentalState, action: PayloadAction<string>) {
        state.endDate = action.payload;
      },
      handleCarId(state: RentalState, action: PayloadAction<number>) {
        state.carId = action.payload;
      },
      handlePickLocationId(state: RentalState, action: PayloadAction<number>) {
        state.picklocationId = action.payload;
      },

      handleDropLocationId(state: RentalState, action: PayloadAction<number>) {
        state.droplocationId = action.payload;
      },
     
      resetRentalState: (state) => {
        return initialRentalState;
      },
    },
  });

  export const { 
    handleStartDate,
    handleEndDate,
    handleCarId,
    handlePickLocationId,
    handleDropLocationId,
    resetRentalState
  } = rentalSlice.actions;

export const rentalReducer =  rentalSlice.reducer;