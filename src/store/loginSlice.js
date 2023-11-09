import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {
    email: "",
    password: "",
  },
  eror: {
    email: "",
    password: "",
  },
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducer: {
    setlogin: (state, action) => {
      state.data = action.payload.data;
    },
    setError: (state, action) => {
      state.error = action.payload.data;
    },
  },
});
export const { setlogin, setError } = loginSlice.actions;
export default loginSlice.reducer;
