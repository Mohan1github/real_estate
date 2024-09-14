import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinstart: (state) => {
      state.loading = true;
    },
    signinsuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signinfailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signinstart, signinsuccess, signinfailed } = userSlice.actions;
export default userSlice.reducer;
