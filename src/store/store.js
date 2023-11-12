import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import loginReducer from "./loginSlice";
const store = configureStore({
  reducer: { loginReducer, authReducer },
});
export default store;
