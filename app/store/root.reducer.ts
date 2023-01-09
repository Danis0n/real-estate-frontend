import {combineReducers} from "@reduxjs/toolkit";
import {authReducer} from "./auth/authSlice";
import {api} from "./api/api";
import { reducer as toastrReducer } from 'react-redux-toastr'

export const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    toastr: toastrReducer
})