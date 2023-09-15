import { createSlice } from '@reduxjs/toolkit'
// import { dispatch } from '../store'

const initialState = {
    profilebar: {
        open: false,
        type: "CONTACT",
    },
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
        }
    },
})

export default appSlice.reducer

export function ToggleProfileBar() {
    return async (dispatch) => {        
        dispatch(appSlice.actions.toggleProfileBar());
    };
}
export function UpdateProfileBarType(type) {
    return async (dispatch) => {
        dispatch(appSlice.actions.updateProfileBarType({ type }));
    };
}

