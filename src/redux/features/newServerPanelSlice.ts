import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { value: false }
export const newServerPanelSlice = createSlice({
  name:"userPanelStatus",
  initialState: initialState,
  reducers: {
    toggleNewServerPanel: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
})

export const { toggleNewServerPanel } = newServerPanelSlice.actions;

export default newServerPanelSlice.reducer;