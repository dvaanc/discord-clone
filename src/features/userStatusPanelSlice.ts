import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: false,
}
export const userStatusPanelSlice = createSlice({
  name:"userPanelStatus",
  initialState: initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
})

export const { toggle } = userStatusPanelSlice.actions;

export default userStatusPanelSlice.reducer;