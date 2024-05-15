// baseURL = 'https://goit-task-manager.herokuapp.com/'
//  baseURL: 'https://connections-api.herokuapp.com/'
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const herokuApi = axios.create({
    baseURL: 'https://goit-task-manager.herokuapp.com/',
  });

  // хелпер, що дає можливість встановлювати токен з Headers. Передається в момент реєстрації й логінізації, Bearer - тримач токену
  const setToken = (token) => {

herokuApi.defaults.headers.common.Authorization = `Bearer ${token}`
  }
  // хелпер, що дає можливість видаляти токен
const clearToken = (token) => {
  herokuApi.defaults.headers.common.Authorization = ``
  }
  export const registerThunk = createAsyncThunk('register', async (credentials, thunkApi) => {
    try{
        const {data} = await herokuApi.post('/users/signup', credentials)
        setToken(data.token)
        
        return data
    }
    catch (error){
        return thunkApi.rejectWithValue(error.message)
    }
  } )
  export const loginThunk = createAsyncThunk('login', async (credentials, {rejectWithValue}) => {
    try{
        const {data} = await herokuApi.post('/users/login', credentials)
        setToken(data.token)
        console.log(data)
        return data
    }
    catch (error){
        return rejectWithValue(error.message)
    }
  } )

  export const logoutThunk = createAsyncThunk('logout', async (_, {rejectWithValue}) => {
    try{
      await herokuApi.post('/users/logout')
      clearToken()
    }
    catch (error){
        return rejectWithValue(error.message)
    }
  } )