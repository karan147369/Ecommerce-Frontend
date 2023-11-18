import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loginWithMobileNo: false,
  data: {
    mobileNumber: "",
    email: "",
    password: "",
  },
  error: {
    mobileNumber: "",
    email: "",
    password: "",
  },
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.data = action.payload.data;
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
    changeLoginForm: (state) => {
      state.loginWithMobileNo = !state.loginWithMobileNo;
    },
  },
});

export const { setLogin, setError, changeLoginForm } = loginSlice.actions;
export default loginSlice.reducer;
