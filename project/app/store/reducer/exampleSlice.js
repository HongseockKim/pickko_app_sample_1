import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    data: 'qweqwe'
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

export const { exampleAction } = exampleSlice.actions;
export default exampleSlice.reducer;