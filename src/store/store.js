import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./reducer";

const store = configureStore({
    reducer: {
        tripReducer,
    },
    devTools: true,
});

export default store;
