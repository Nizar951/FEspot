import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user_token',
    initialState: {
        user_token: "",
    },
    reducers: {
        setUserToken: (state, action) => {
            state.user_token += action.payload;
        }
    }
});

export const {setUserToken} = userSlice.actions;
export default userSlice.reducer;