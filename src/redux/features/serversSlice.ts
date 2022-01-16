import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  servers: []
}
export const serversSlice = createSlice({
  name:"serverList",
  initialState: initialState,
  reducers: {
    setServers: (state, action: PayloadAction<any>) => {
      state.servers = action.payload;
    },
  },
})

export const { setServers } = serversSlice.actions;

export default serversSlice.reducer;