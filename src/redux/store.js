import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/slice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
    reducer: {
       
        auth: authReducer,
        todos: todosReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})