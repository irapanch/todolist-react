// baseURL = 'https://goit-task-manager.herokuapp.com/'
//  baseURL: 'https://connections-api.herokuapp.com/'
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const herokuApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
  });

  export const registerThunk = createAsyncThunk('register', async (credentials, thunkApi) => {
    try{
        const {data} = await herokuApi.post('/users/signup', credentials)
        
        return data
    }
    catch (error){
        return thunkApi.rejectWithValue(error.message)
    }
  } )
  export const loginThunk = createAsyncThunk('login', async (credentials, {rejectWithValue}) => {
    try{
        const {data} = await herokuApi.post('/users/login', credentials)
        console.log(data)
        return data
    }
    catch (error){
        return rejectWithValue(error.message)
    }
  } )