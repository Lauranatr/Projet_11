import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        email:"",
        userName:"",
        firstName:"",
        lastName: "",
    },
    reducers: {
        setProfile: (state, action) => {
            state.email = action.payload.email;
            state.userName = action.payload.userName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        setUpdateUserName: (state, action) => {
            state.userName = action.payload.updateUserName;
        }
    },
});

export const {setProfile, setUpdateUserName} = profileSlice.actions;
export default profileSlice.reducer;