import { configureStore } from "@reduxjs/toolkit";

import training from "./slices/training";

const store = configureStore({
    reducer: {
        training,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
