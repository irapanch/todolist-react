import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { setCurrentItem } from "./slice";
import { herokuApi } from "../auth/operations";

// const  todos = axios.create({
//     baseURL: 'https://6536b8babb226bb85dd28cc5.mockapi.io/adverts'
// })

export const fetchTodoThunk = createAsyncThunk('fetchTodos', async (_, thunkAPI) => {
    const res = await herokuApi.get('/tasks')
        return res.data
})

export const deleteTodoThunk = createAsyncThunk('deleteTodo', async (id, thunkAPI) => {
    await herokuApi.delete(`/tasks/${id}`)
     thunkAPI.dispatch(fetchTodoThunk())
})

export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkAPI) => {
    await herokuApi.post('/tasks', body)
     thunkAPI.dispatch(fetchTodoThunk()) // підгружаємо дані з бази і в кінці своє оновлення без ререндера всієї сторінки
})

export const toggleTodoThunk = createAsyncThunk('toggleTodo', async (body, thunkAPI) => {
    thunkAPI.dispatch(setCurrentItem(body.id))
    await herokuApi.patch(`/tasks/${body.id}`, {...body, completed: !body.completed })
     thunkAPI.dispatch(fetchTodoThunk())

})