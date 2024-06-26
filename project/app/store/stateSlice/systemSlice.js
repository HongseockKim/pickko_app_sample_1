import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
};

const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            console.log("=>(systemSlice.js:13) action.payload", action.payload);
            state.isLoading = action.payload;
        },
    }
});

export const {
    setLoading,
} = systemSlice.actions;
export default systemSlice.reducer;