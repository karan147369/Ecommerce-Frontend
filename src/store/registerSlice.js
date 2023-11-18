import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    mobileNumber: "",
  },
  error: {
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    dob: false,
    gender: false,
    mobileNumber: false,
  },

  errorMessage: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    mobileNumber: "",
  },
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRegister: (state, action) => {
      state.data = action.payload.data;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload.errorMessage;
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const { setRegister, setError, setErrorMessage } = registerSlice.actions;
export default registerSlice.reducer;
