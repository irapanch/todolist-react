import { createSlice, isAnyOf } from "@reduxjs/toolkit"

import { loginThunk, logoutThunk, registerThunk } from "./operations"

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: '',
    isLoggedIn: false,
    error: '',
    loading: false
}

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(logoutThunk.fulfilled, (state, {payload}) => {
         return   (state = initialState)
        })
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
        
         .addMatcher(isAnyOf(registerThunk.pending, loginThunk.pending),(state, {payload}) => {
                state.loading = true
            })
        .addMatcher(isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),(state, {payload}) => {
                state.user = payload.user
                state.token = payload.token
                state.isLoggedIn = true
                state.loading = false
            })
        .addMatcher(isAnyOf(registerThunk.rejected, loginThunk.rejected),(state, {payload}) => {
                state.loading = false
            })
    },
})

export const authReducer = slice.reducer