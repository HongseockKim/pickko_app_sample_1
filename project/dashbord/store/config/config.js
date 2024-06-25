import {exampleTransform} from "../transforms/transform.js";
import {persistReducer} from "redux-persist";
import exampleSlice from "../stateSlice/exampleSlice.js";

/* 기븐오으로 지원해주는 storage 는 persist 라는 접두사가 붙기때문에 커스텀 스토리지 사용 */
const customStorage = {
    getItem: (key) => {
        return Promise.resolve(localStorage.getItem(key.replace('persist:', '')));
    },
    setItem: (key, value) => {
        return Promise.resolve(localStorage.setItem(key.replace('persist:', ''), value));
    },
    removeItem: (key) => {
        return Promise.resolve(localStorage.removeItem(key.replace('persist:', '')));
    }
};


const examplePersistConfig = {
    key: 'example', // 내가 스토리지에 저장할 key 값
    storage:customStorage,
    transforms: [exampleTransform],
};

const persistedExampleReducer = persistReducer(examplePersistConfig, exampleSlice);

export {persistedExampleReducer}