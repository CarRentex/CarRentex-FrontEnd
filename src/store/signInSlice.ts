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
  

  const signInSlice = createSlice({
      name: "signIn",
      initialState: { signIn: [] as any[],error: null as string | null ,decodedToken: null},
      reducers: {
        setDecodedToken: (state, action) => {
          state.decodedToken = action.payload;
        },
      },
      extraReducers: (builder) => {
       
    
        builder.addCase(addSignIn.pending, (state) => {});
        builder.addCase(addSignIn.fulfilled, (state, action) => {
          state.signIn.push(action.payload);
        });
        builder.addCase(addSignIn.rejected, (state, action) => {
          state.error = action.error.message || "Bir hata oluştu.";
        });

      },
    });
    export const { setDecodedToken } = signInSlice.actions;
    export const signInReducer = signInSlice.reducer;