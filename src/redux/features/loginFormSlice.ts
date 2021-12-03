import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { value: true }
export const loginFormSlice = createSlice({
  name:"userPanelStatus",
  initialState: initialState,
  reducers: {
    toggleLoginDisplay: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
})

export const { toggleLoginDisplay } = loginFormSlice.actions;

export default loginFormSlice.reducer;