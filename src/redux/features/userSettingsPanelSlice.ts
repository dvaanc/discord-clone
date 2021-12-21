import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { value: true }
export const userSettingsPanelSlice = createSlice({
  name:"userSettings",
  initialState: initialState,
  reducers: {
    toggleUserSettingsPanel: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
})

export const { toggleUserSettingsPanel } = userSettingsPanelSlice.actions;

export default userSettingsPanelSlice.reducer;