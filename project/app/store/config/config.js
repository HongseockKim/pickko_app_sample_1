import {exampleTransform} from "../transforms/transform.js";
import {persistReducer} from "redux-persist";
import exampleSlice from "../stateSlice/exampleSlice.js";
import {customStorage} from "../../util/util.js";


const examplePersistConfig = {
    key: 'example', // 내가 스토리지에 저장할 key 값
    storage:customStorage,
    transforms: [exampleTransform],
};



const persistedExampleReducer = persistReducer(examplePersistConfig, exampleSlice);



export {
    persistedExampleReducer
}