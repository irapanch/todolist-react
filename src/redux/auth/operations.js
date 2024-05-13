// baseURL = 'https://goit-task-manager.herokuapp.com/'

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const herokuApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
  });

  export const registerThunk = createAsyncThunk('register', async (credentials, thunkApi) => {
    try{
        const {data} = await herokuApi.post('/user/signup', credentials)
        console.log(data)
        return data
    }
    catch (error){
        return thunkApi.rejectWithValue(error.message)
    }
  } )