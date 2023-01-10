import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root.reducer";
import {api} from "./api/api";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
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

const createNoopStorage = () => {
    return {
        getItem(_key: any) {
            return Promise.resolve(null);
        },
        setItem(_key: any, value: any) {
            return Promise.resolve(value);
        },
        removeItem(_key: any) {
            return Promise.resolve();
        }
    }
}

const storage =
    typeof window !== 'undefined'
        ? createWebStorage('local')
        : createNoopStorage();

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['auth'],
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