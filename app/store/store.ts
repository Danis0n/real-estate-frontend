import { configureStore } from "@reduxjs/toolkit";
import {rootReducer} from "./root.reducer";
import {api} from "./api/api";

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(api.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>