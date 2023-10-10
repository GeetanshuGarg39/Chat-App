import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profilebar: {
        open: false,
        type: "CONTACT",
    },
    snackbar: {
        open: null,
        message: null,
        severity: null,
    }
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleProfileBar: (state, action) => {
            state.profilebar.open = !state.profilebar.open
        },
        updateProfileBarType: (state, action) => {
            state.profilebar.type = action.payload.type
        },
        openSnackbar: (state, action) => {
            state.snackbar.open = true
            state.snackbar.severity = action.payload.severity
            state.snackbar.message = action.payload.message
        },
        closeSnackbar: (state, action) => {
            state.snackbar.open = false
            state.snackbar.severity = null
            state.snackbar.message = null
        }
    },
})

export default appSlice.reducer

export function ToggleProfileBar() {
    return async (dispatch, getState) => {
        dispatch(appSlice.actions.toggleProfileBar());
    };
}
export function UpdateProfileBarType(type) {
    return async (dispatch, getState) => {
        dispatch(appSlice.actions.updateProfileBarType({ type }));
    };
}

export function showSnackbar({ severity, message }) {
    return async (dispatch, getState) => {
        dispatch(appSlice.actions.openSnackbar({
            message,
            severity
        }))

        setTimeout(() => {
            dispatch(appSlice.actions.closeSnackbar());
        }, 5000)
    }
}

export const closeSnackbar = () => async (dispatch, getState) => {
    dispatch(appSlice.actions.closeSnackbar());
}

