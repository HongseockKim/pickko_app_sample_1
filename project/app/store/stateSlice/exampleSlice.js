import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    data: '테스트데이터',
    exampleListData: [],
};

const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        exampleAction: (state, action) => {
            state.data = action.payload;
        },
        setExampleListData: (state,action) =>{
         state.exampleListData =   action.payload;
        }
    }
});

export const {
    exampleAction,
    setExampleListData
} = exampleSlice.actions;
export default exampleSlice.reducer;