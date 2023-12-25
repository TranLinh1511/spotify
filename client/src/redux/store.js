import { configureStore } from "@reduxjs/toolkit";
import musicsSlice from "./musicsSlice";
import getMusicSlice from "./getMusicSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        listMusic: musicsSlice,
        getMusic: getMusicSlice,
        listUser: userSlice,
    },
});

export default store;
