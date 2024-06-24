import {configureStore} from '@reduxjs/toolkit';
import exampleSlice from "../reducer/exampleSlice.js";

const customMiddleware = store => next => action => {
    console.log('디스패치 중:', action);
    let result = next(action);
    console.log('다음 상태:', store.getState());
    return result;
};

const store = configureStore({
    reducer: {
        example: exampleSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(customMiddleware) // 기본 미들웨어 앞에 커스텀 미들웨어 추가
});

export default store;