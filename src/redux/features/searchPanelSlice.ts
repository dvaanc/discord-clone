import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { value: false }
export const searchPanelSlice = createSlice({
  name:"userPanelStatus",
  initialState: initialState,
  reducers: {
    toggleSearchPanel: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
})

export const { toggleSearchPanel } = searchPanelSlice.actions;

export default searchPanelSlice.reducer;