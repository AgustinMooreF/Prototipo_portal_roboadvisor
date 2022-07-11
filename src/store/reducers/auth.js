import { createSlice } from '@reduxjs/toolkit';
import { fetchUserData, login, signOut } from '../actions/authThunk';
import { getToken } from 'utils/tokenHelper';
const initialState = {
    token: getToken() || null,
    refreshToken: null,
    loading: false,
    loggedin: false,
    userData: {}
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        persistToken(state, action) {
            console.log(action.payload);
            state.token = action.payload.token;
        }
    },
    extraReducers: {
        [signOut.fulfilled]: (state, action) => {
            state.loading = false;
            state.userData = {};
            state.token = null;
        },
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            const { token, result, refreshToken, auth } = action.payload;
            state.token = token;
            state.refreshToken = refreshToken;
            state.userData = result;
            state.loading = false;
            state.loggedin = auth;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.userData = {};
            state.loggedin = false;
            state.token = null;
            state.refreshToken = null;
        },
        [fetchUserData.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchUserData.fulfilled]: (state, action) => {
            const { token, result, refreshToken, auth } = action.payload.data;
            state.token = accessToken;
            state.refreshToken = refreshToken;
            state.userData = user;
            state.loading = false;
        },
        [fetchUserData.rejected]: (state, action) => {
            state.loading = false;
            state.userData = {};
            state.token = null;
        }
    }
});

export const {} = authSlice.actions;

export default authSlice.reducer;
