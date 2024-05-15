import { createSelector } from "@reduxjs/toolkit"

export const selectTodos = state => state.todos.todos
export const selectFilter = state => state.todos.filter
export const selectLoading = state => state.todos.loading
export const selectCurrentItem = state => state.todos.currentItem

export const selectFilteredTodos = createSelector    ([selectTodos, selectFilter], (todos, filter) => { 
    switch(filter){
        case 'all':
            return todos
        case 'active':
            return todos.filter(item => !item.completed)
            case 'completed':
                return todos.filter(item => item.completed)

        default:
            console.log('error with filter: ', filter);
    }
})