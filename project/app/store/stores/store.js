import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import {persistedExampleReducer, persistedSystemReducer} from "../config/config.js";

const customMiddleware = store => next => action => {
    console.log('디스패치 중:', action);
    let result = next(action);
    console.log('다음 상태:', store.getState());
    return result;
};

const store = configureStore({
    reducer: {
        example: persistedExampleReducer,
        system: persistedSystemReducer,
    },
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