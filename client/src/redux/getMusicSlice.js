import { createSlice } from "@reduxjs/toolkit";

const getMusicSlice = createSlice({
    name: "music",
    initialState: {
        album: {},
        index: "",
    },
    reducers: {
        getAlbum: (state, action) => {
            state.album = action.payload;
        },
        getIndex: (state, action) => {
            state.index = action.payload;
        },
    },
});

export const { getAlbum, getIndex } = getMusicSlice.actions;
export default getMusicSlice.reducer;
