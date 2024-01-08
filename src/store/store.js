import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import loginReducer from "./loginSlice";
import registerReducer from "./registerSlice";
import colorThemeReducer from "./colorThemeSlice";
const store = configureStore({
  reducer: { loginReducer, registerReducer, authReducer, colorThemeReducer },
});
export default store;
