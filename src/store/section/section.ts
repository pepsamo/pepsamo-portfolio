import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'section',
    initialState: {
        actualSection: 'HOME'
    },
    reducers: {
        changeSection: (state, action) => {
            state.actualSection = action.payload;
        } 
    }
});

export const { changeSection } = slice.actions;
export default slice.reducer;