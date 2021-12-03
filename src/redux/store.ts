import { configureStore } from "@reduxjs/toolkit";
import userStatusPanelReducer from "./features/userStatusPanelSlice";
import searchPanelReducer from "./features/searchPanelSlice";
import loginFormReducer from './features/loginFormSlice';
import registerFormReducer from './features/registerFormSlice';
export const store = configureStore({
  reducer: {
    userStatusPanel: userStatusPanelReducer,
    searchPanel: searchPanelReducer,
    loginForm: loginFormReducer,
    registerForm: registerFormReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;