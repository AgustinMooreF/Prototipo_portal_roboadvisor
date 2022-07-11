import { createAsyncThunk } from '@reduxjs/toolkit';
import { getToken, removeToken, setToken } from '../../utils/tokenHelper';
// import history from '../../utils/browserHistory';
// import { Navigate } from 'react-router-dom';
import { loginAPI } from 'services/auth/auth.service';

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (_, { rejectWithValue }) => {
    try {
        const accessToken = getToken();
        api.defaults.headers.Authorization = `Bearer ${accessToken}`;
        const response = await api.get('/user');
        return { ...response.data, accessToken };
    } catch (e) {
        removeToken();
        return rejectWithValue('');
    }
});

export const login = createAsyncThunk('auth/login', async (payload) => {
    const { email, password } = payload;
    const response = await loginAPI(email, password);
    console.log(response);
    setToken(response.data.token);
    // Navigate('/dashboard');
    return response.data;
});

export const signOut = createAsyncThunk('auth/signOut', async () => {
    removeToken();
});
