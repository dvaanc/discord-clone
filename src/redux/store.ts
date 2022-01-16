import { configureStore } from "@reduxjs/toolkit";
import userStatusPanelReducer from "./features/userStatusPanelSlice";
import searchPanelReducer from "./features/searchPanelSlice";
import currentUserReducer from "./features/currentUserSlice";
import userSettingsPanelReducer from './features/userSettingsPanelSlice';
import newServerPanelReducer from './features/newServerPanelSlice';
import serversSliceReducer from './features/serversSlice'
export const store = configureStore({
  reducer: {
    userStatusPanel: userStatusPanelReducer,
    searchPanel: searchPanelReducer,
    currentUser: currentUserReducer,
    userSettingsPanel: userSettingsPanelReducer,
    newServerPanel: newServerPanelReducer,
    servers: serversSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;