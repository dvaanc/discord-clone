import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { value: false }
export const registerFormSlice = createSlice({
  name:"userPanelStatus",
  initialState: initialState,
  reducers: {
    toggleRegisterDisplay: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
})

export const { toggleRegisterDisplay } = registerFormSlice.actions;

export default registerFormSlice.reducer;