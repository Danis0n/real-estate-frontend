import {combineReducers} from "@reduxjs/toolkit";
import {authReducer} from "./auth/authSlice";
import {api} from "./api/api";

export const rootReducer = combineReducers({
    auth: authReducer,
    [api.reducerPath]: api.reducer,
})