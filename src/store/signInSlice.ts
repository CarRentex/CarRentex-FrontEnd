import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateLogin } from "../models/Auth/CreateLogin";
import { login } from "../services/AuthService/auth";

export const addSignIn = createAsyncThunk(
  "signin/addSignIn",
  async (addSignInData: CreateLogin, thunkAPI) => {
      try {
          //console.log("addSignInData", addSignInData);
          const addedSignIn = await login(addSignInData);
          //console.log("addedSignIn", addedSignIn);
          const token = addedSignIn.data;
          console.log("token", token);
          localStorage.setItem("token", token);
          return addedSignIn.data.response; // Response'u doğrudan döndürüyoruz
      } catch (error) {
          console.error("Error adding signIn:", error);
          throw new Error("İşlem sırasında bir hata oluştu");
      }
  }
);


  const initialState = {
    id: 0,
    email: "",
    role: "", 
    address: "",
    phoneNumber: "",
    isauthenticated: false,   
  };
  

  const signInSlice = createSlice({
      name: "user",
      initialState: initialState,
      reducers: {
        loginSuccess: (state, action) => {
          if (action.payload) {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.address = action.payload.address;
            state.phoneNumber = action.payload.phoneNumber;
            state.isauthenticated = true;
          }
        },
        logoutSuccess: (state) => {
          state.id = 0;
          state.email = "";
          state.role = "";
          state.isauthenticated = false;
        }
      },
    });
    export const { loginSuccess, logoutSuccess } = signInSlice.actions;
    export const signInReducer = signInSlice.reducer;