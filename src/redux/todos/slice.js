import { createSlice } from "@reduxjs/toolkit"
import { fetchTodoThunk } from "./operations"

const initialState = {
    // todos: [{todo: 'TEST', id: 1, completed: true}],
    todos: [],
    filter: 'all',
    loading: false,
    currentItem: null,
}

const slice = createSlice({
    name: 'todos',
    initialState,
    extraReducers: builder => {
        builder
        .addCase (fetchTodoThunk.fulfilled, (state, action) =>{
            state.todos = action.payload
        })
    }
})

export const todosReducer = slice.reducer