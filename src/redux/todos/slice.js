import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [{todo: 'TEST', id: 1, completed: true}],
    filter: 'all',
    loading: false,
    currentItem: null,
}

const slice = createSlice({
    name: 'todos',
    initialState,
})

export const todosReducer = slice.reducer