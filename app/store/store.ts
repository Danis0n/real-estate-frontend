import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root.reducer";
import {api} from "./api/api";
// @ts-ignore
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistStore
} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH,REHYDRATE,PAUSE, PERSIST ,PURGE, REGISTER]
        },
    }).concat(api.middleware)
})

export const persistor = persistStore(store);
export type TypeRootState = ReturnType<typeof store.getState>