import {customStorage} from "../../util/util.js";
import {createTransform} from 'redux-persist';

// 저장할 때 호출되는 함수
const saveTransform = (inboundState, key) => {
    console.log(`Saving state for key: ${key}`);
    return inboundState;
};

// 복원할 때 호출되는 함수
const loadTransform = (outboundState, key) => {
    console.log(`Loading state for key: ${key}`);
    return outboundState;
};

const exampleTransform = createTransform(
    saveTransform,
    loadTransform,
    // 작동할 리듀서 키
    { whitelist: [
            'example',
            'system'
        ] }
);


export const createPersistConfig = (key) => ({
    key,
    storage: customStorage,
    transforms: [exampleTransform],
});
