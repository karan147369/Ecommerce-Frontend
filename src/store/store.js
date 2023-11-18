import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import loginReducer from "./loginSlice";
import registerReducer from "./registerSlice";
const store = configureStore({
  reducer: { loginReducer, registerReducer, authReducer },
});
export default store;
