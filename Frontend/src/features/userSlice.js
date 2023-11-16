import { createSlice } from "@reduxjs/toolkit";

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token") || null;
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
    token: getTokenFromLocalStorage(),
  },
  reducers: {
    setSignIn: (state, action) => {
      state.token = action.payload.body.token;
    },
    setSignOut: (state) => {
      state.token = null;
    },
  },
});

export const { setSignIn, setSignOut } = userSlice.actions;
export default userSlice.reducer;
