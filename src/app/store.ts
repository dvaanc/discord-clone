import { configureStore } from "@reduxjs/toolkit";
import userStatusPanelReducer from "../features/userStatusPanelSlice";
export const store = configureStore({
  reducer: {
    userStatusPanel: userStatusPanelReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;