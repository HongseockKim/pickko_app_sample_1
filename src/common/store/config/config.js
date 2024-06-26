import {exampleTransform} from "../transforms/transform.js";
import {persistReducer} from "redux-persist";
import exampleSlice from "../stateSlice/exampleSlice.js";
import {customStorage} from "../../util/util.js";
import systemSlice from "../stateSlice/systemSlice.js";


const examplePersistConfig = {
    key: 'example', // 내가 스토리지에 저장할 key 값
    storage:customStorage,
    transforms: [exampleTransform],
};

const systemPersistConfig = {
    key: 'system', // 내가 스토리지에 저장할 key 값
    storage:customStorage,
    transforms: [exampleTransform],
};



const persistedExampleReducer = persistReducer(examplePersistConfig, exampleSlice);
const persistedSystemReducer = persistReducer(systemPersistConfig, systemSlice);



export {
    persistedExampleReducer,
    persistedSystemReducer
}