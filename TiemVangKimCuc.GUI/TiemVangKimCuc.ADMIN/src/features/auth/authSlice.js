import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import authApis from '../../api/authApis';
import { isTokenValid } from '../../ultils/tokenUltils';

export const fetchAsyncLoginUsers = createAsyncThunk(
    'auth/login',
    async (data) => {
        const response = await authApis.login(data);
        return response;
    }
);

export const fetchAsyncLoadUser = createAsyncThunk(
    'auth/loadUser',
    async () => {
        const response = await authApis.loadUser();
        return response;
    }
);

const initialState = {
    isAuthenticated: isTokenValid(localStorage.getItem('token')) ? true : false,
    user: null,
    isLoading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchAsyncLoginUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAsyncLoginUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload.result === true) {
                state.isAuthenticated = true;
                localStorage.setItem('token', action.payload.dataResult.accessToken);
            }
            else {
                state.error = action.payload.errorMessage;
            }
        });
        builder.addCase(fetchAsyncLoginUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.isAuthenticated = false;
        });

        builder.addCase(fetchAsyncLoadUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAsyncLoadUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload.dataResult;
        });
    }
})


export const {logout} = authSlice.actions;

export const getIsAuthenticated = (state) => state.auth.isAuthenticated;
export const getUserData = (state) => state.auth.user;
export const getIsAuthencating = (state) => state.auth.isLoading;

export default authSlice.reducer;
