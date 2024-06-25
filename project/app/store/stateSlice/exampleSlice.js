import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    data: '테스트데이터'
};

const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        exampleAction: (state, action) => {
            state.data = action.payload;
        }
    }
});

export const {
    exampleAction
} = exampleSlice.actions;
export default exampleSlice.reducer;