import { configureStore } from "@reduxjs/toolkit";
import userStatusPanelReducer from "./features/userStatusPanelSlice";
import searchPanelReducer from "./features/searchPanelSlice";
import currentUserReducer from "./features/currentUserSlice";

export const store = configureStore({
  reducer: {
    userStatusPanel: userStatusPanelReducer,
    searchPanel: searchPanelReducer,
    currentUser: currentUserReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;