import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { value: false };

export const userStatusPanelSlice = createSlice({
  name:"userPanelStatus",
  initialState: initialState,
  reducers: {
    toggleUserStatusPanel: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
})

export const { toggleUserStatusPanel } = userStatusPanelSlice.actions;

export default userStatusPanelSlice.reducer;