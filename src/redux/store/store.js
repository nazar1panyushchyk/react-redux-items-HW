import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "../slice/itemsSlice";
import { persistStore, persistReducer, REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, itemsReducer)

export const store = configureStore({
    reducer: {
         items: persistedReducer,
    },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
});

export const persistor = persistStore(store);