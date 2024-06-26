import { createSlice } from "@reduxjs/toolkit"
import { deleteTodoThunk, fetchTodoThunk, toggleTodoThunk } from "./operations"
import { logoutThunk } from "../auth/operations"

const initialState = {
    todos: [],
    filter: 'all',
    loading: false,
    currentItem: null,
}

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // clearSelectedTodo: (state, action) => {
        //     state.todos= state.todos.filter((item) => !item.completed)
        // },
        // clearTodos: (state, action) => {
        //     state.todos= []
        // },
        setFilterStr: (state, action) => {
            state.filter= action.payload
        },

        setCurrentItem: (state, action) => {
            state.currentItem = action.payload}
    },
    extraReducers: builder => {
        builder
        .addCase (fetchTodoThunk.fulfilled, (state, action) =>{
            state.todos = action.payload
        })
        .addCase (deleteTodoThunk.fulfilled, (state, action) =>{
            state.todos= state.todos.filter((item) => item.id !== action.payload)
        })
        .addCase(toggleTodoThunk.pending, (state, {payload}) => {
            state.loading = true
        })
        .addCase(toggleTodoThunk.fulfilled, (state, {payload}) => {
            state.loading = false
            state.currentItem = null
        })
        .addCase(logoutThunk.fulfilled, (state, action) => {
            state.todos = [] // дозволяє очистити дані, щоб наступний користувач не побачив стейт попереднього користувача
        })
    }
})

export const todosReducer = slice.reducer
export const {  setCurrentItem,  setFilterStr} = slice.actions