import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { user: null as any};
export const currentUserSlice = createSlice({
  name:"userPanelStatus",
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
})

export const { setCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;