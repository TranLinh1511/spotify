import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    listMusics: [],
    listPlaylist: [],
    listAlbum: [],
    artist: [],
    music: {},
    status: "idel",
    error: null,
};
export const fetchApiTrack = createAsyncThunk("tracks", async () => {
    const response = await axios.get("http://localhost:8000/track");
    return response.data;
});
export const fetchApiAlbum = createAsyncThunk("album", async () => {
    const response = await axios.get("http://localhost:8000/album");
    return response.data;
});
export const fetchApiPlaylist = createAsyncThunk("playlist", async () => {
    const response = await axios.get("http://localhost:8000/playList");
    return response.data;
});
export const fetchApiArtist = createAsyncThunk("artist", async () => {
    const response = await axios.get("http://localhost:8000/artist");
    return response.data;
});
const trackAction = createSlice({
    name: "music",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiTrack.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchApiTrack.fulfilled, (state, action) => {
                state.status = "success";
                state.listMusics = action.payload;
            })
            .addCase(fetchApiTrack.rejected, (state, action) => {
                state.status = "false";
                state.error = action.error.message;
            });
        builder
            .addCase(fetchApiAlbum.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchApiAlbum.fulfilled, (state, action) => {
                state.status = "success";
                state.listAlbum = action.payload;
            })
            .addCase(fetchApiAlbum.rejected, (state, action) => {
                state.status = "false";
                state.error = action.error.message;
            });
        builder
            .addCase(fetchApiArtist.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchApiArtist.fulfilled, (state, action) => {
                state.status = "success";
                state.artist = action.payload;
            })
            .addCase(fetchApiArtist.rejected, (state, action) => {
                state.status = "false";
                state.error = action.error.message;
            });
        builder
            .addCase(fetchApiPlaylist.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchApiPlaylist.fulfilled, (state, action) => {
                state.status = "success";
                state.listPlaylist = action.payload;
            })
            .addCase(fetchApiPlaylist.rejected, (state, action) => {
                state.status = "false";
                state.error = action.error.message;
            });
    },
});
export default trackAction.reducer;
