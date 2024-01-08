import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "light",
};
const colorThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload.value;
    },
  },
});
export const { changeTheme } = colorThemeSlice.actions;
export default colorThemeSlice.reducer;
