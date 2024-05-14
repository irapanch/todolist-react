import { createSlice, isAnyOf } from "@reduxjs/toolkit"

import { loginThunk, registerThunk } from "./operations"

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: 'zfjj',
    isLoggedIn: true,
    error: '',
}

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        // builder.addCase(registerThunk.fulfilled, (state, {payload}) => {
        //     state.user = payload.user
        //     state.token = payload.token
        //     state.isLoggedIn = true
        // })
        // builder.addCase(loginThunk.fulfilled, (state, {payload}) => {
        //     state.user = payload.user
        //     state.token = payload.token
        //     state.isLoggedIn = true
        // })
        // ------- однакові функції можемо об'єднати в addMatcher
         builder.addMatcher(isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),(state, {payload}) => {
                state.user = payload.user
                state.token = payload.token
                state.isLoggedIn = true
            })
    },
})

export const authReducer = slice.reducer