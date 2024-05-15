import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const  todos = axios.create({
    baseURL: 'https://6536b8babb226bb85dd28cc5.mockapi.io/adverts'
})

export const fetchTodoThunk = createAsyncThunk('fetchTodos', async (_, thunkAPI) => {
    const res = await todos.get('/todos')
        return res.data
})