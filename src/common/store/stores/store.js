import {configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import exampleSlice from "../stateSlice/exampleSlice.js";
import systemSlice from "../stateSlice/systemSlice.js";
import {createPersistConfig} from "../config/config.js";


export const slices = {
    example: exampleSlice,
    system: systemSlice,
};



const persistedReducers = Object.entries(slices).reduce((acc, [key, slice]) => {
    acc[key] = persistReducer(createPersistConfig(key), slice);
    return acc;
}, {});


const customMiddleware = store => next => action => {
    console.log('디스패치 중:', action);
    let result = next(action);
    console.log('다음 상태:', store.getState());
    return result;
};

const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    'persist/PERSIST',
                    'persist/REHYDRATE',
                    'persist/PAUSE',
                    'persist/PURGE',
                    'persist/REGISTER',
                ],
            },
        }).prepend(customMiddleware),
});

const persistor = persistStore(store);

export { store, persistor };