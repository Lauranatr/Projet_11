import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import profileSlice from "../features/profileSlice";

export default configureStore({
    reducer: {
        auth: userSlice,
        profile: profileSlice,
    },
});
