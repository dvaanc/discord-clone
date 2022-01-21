import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  currentServer: null as null | string
}
export const currentServerSlice = createSlice({
  name:"currentServer",
  initialState: initialState,
  reducers: {
    setCurrentServer: (state, action: PayloadAction<any>) => {
      state.currentServer = action.payload;
    },
  },
})

export const { setCurrentServer } = currentServerSlice.actions;

export default currentServerSlice.reducer;