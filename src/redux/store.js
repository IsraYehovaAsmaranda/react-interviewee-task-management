import { configureStore } from "@reduxjs/toolkit";
import asyncActionMiddlewares from "./middlewares/asynActionMiddleware";
import uiReducer from "./slices/uiSlice";
import authReducer from "../features/auth/authSlice";
import taskReducer from "./slices/taskSlice";

const store = configureStore({
    reducer: {
        ui:  uiReducer,
        auth: authReducer,
        task: taskReducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(asyncActionMiddlewares)
});

export default store;