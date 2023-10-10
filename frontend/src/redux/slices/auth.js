import { createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/axios';
import { showSnackbar } from './app';

const initialState = {
    isLoggedIn: false,
    token: "",
    isLoading: false,
    email: "",
    error: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateIsLoading(state, action) {
            state.error = action.payload.error;
            state.isLoading = action.payload.isLoading;            
        },
        logIn(state, action) {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
        },
        signOut(state, action) {
            state.isLoggedIn = false;
            state.token = "";
        },
        updateEmail(state, action) {            
            state.email = action.payload.email;
        }
    }
})

export default authSlice.reducer;

export function LoginUser(body) {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post("/auth/login", {
                ...body,
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })

            dispatch(authSlice.actions.logIn({
                isLoggedIn: true,
                token: response.data.token,
            }))         
            
            dispatch(showSnackbar({
                severity: "success",
                message: response.data.message
            }))

        } catch (error) {            
            console.log(error)

            dispatch(showSnackbar({
                severity: "error",
                message: error.message
            }))
        }
    }
}

export function LogoutUser() {
    return async (dispatch, getState) => {
        dispatch(authSlice.actions.signOut())

        dispatch(showSnackbar({
            severity: "success",
            message: "Logout successfully"
        }))
    }
}

export function RegisterUser(body) {
    return async (dispatch, getState) => {

        dispatch(authSlice.actions.updateIsLoading({
            isLoading: true,
            error: false
        }))

        try {
            const response = await axios.post("/auth/register", {
                ...body,
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })

            dispatch(authSlice.actions.updateEmail({                
                email: body.email,
            }))   

            dispatch(showSnackbar({
                severity: "success",
                message: "Account Created. Please Login!"
            }))

            dispatch(authSlice.actions.updateIsLoading({
                isLoading: false,
                error: false
            }))

            window.location.href = "/auth/login";

        } catch (error) {            
            console.log(error)

            dispatch(showSnackbar({
                severity: "error",
                message: error.message
            }))
            
            dispatch(authSlice.actions.updateIsLoading({
                isLoading: false,
                error: true
            }))
        }
    }
}