import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    listUsers: [],
    status: "idel",
    error: null,
};
export const fetchApiusers = createAsyncThunk("users", async () => {
    const response = await axios.get("http://localhost:8000/users");
    return response.data;
});
export const addUsersApi = createAsyncThunk("add-users", async (newUser) => {
    await axios.post("http://localhost:8000/users", newUser);
    const response = await axios.get("http://localhost:8000/users");
    return response.data;
});
export const loginUserApi = createAsyncThunk("login-users", async (newUser) => {
    await axios.patch(`http://localhost:8000/users/${newUser.id}`, newUser);
    const response = await axios.get("http://localhost:8000/users");
    return response.data;
});
export const playingUserApi = createAsyncThunk(
    "play-users",
    async (newUser) => {
        await axios.patch(`http://localhost:8000/users/${newUser.id}`, newUser);
        const response = await axios.get("http://localhost:8000/users");
        return response.data;
    }
);

const trackAction = createSlice({
    name: "music",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiusers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchApiusers.fulfilled, (state, action) => {
                state.status = "success";
                state.listUsers = action.payload;
            })
            .addCase(fetchApiusers.rejected, (state, action) => {
                state.status = "false";
                state.error = action.error.message;
            });
        builder
            .addCase(addUsersApi.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addUsersApi.fulfilled, (state, action) => {
                state.status = "success";
                state.listUsers = action.payload;
            })
            .addCase(addUsersApi.rejected, (state, action) => {
                state.status = "false";
                state.error = action.error.message;
            });
        builder
            .addCase(loginUserApi.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loginUserApi.fulfilled, (state, action) => {
                state.status = "success";
                state.listUsers = action.payload;
            })
            .addCase(loginUserApi.rejected, (state, action) => {
                state.status = "false";
                state.error = action.error.message;
            });
        builder
            .addCase(playingUserApi.pending, (state) => {
                state.status = "loading";
            })
            .addCase(playingUserApi.fulfilled, (state, action) => {
                state.status = "success";
                state.listUsers = action.payload;
            })
            .addCase(playingUserApi.rejected, (state, action) => {
                state.status = "false";
                state.error = action.error.message;
            });
    },
});
export default trackAction.reducer;
